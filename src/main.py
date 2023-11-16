import io

import requests
from dotenv import load_dotenv
import streamlit as st
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
from langchain.callbacks import get_openai_callback
from fastapi import FastAPI
import pypdf
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware


class Send(BaseModel):
    url: str
    message: str

load_dotenv()
st.set_page_config(page_title="Ask your PDF")
st.header("Ask your PDF 💬")
headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Windows; Windows x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36'}

app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.post("/")
async def read_root(item: Send):
    print(item)
    url = item.url
    message = item.message
    file_res = requests.get(url=url, headers=headers, timeout=120)
    on_fly_mem_obj = io.BytesIO(file_res.content)
    pdf_reader = PdfReader(on_fly_mem_obj)
    text = ""
    for page in pdf_reader.pages:
      text += page.extract_text()

    # split into chunks
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
      )
    chunks = text_splitter.split_text(text)

    # create embeddings
    embeddings = OpenAIEmbeddings()
    knowledge_base = FAISS.from_texts(chunks, embeddings)

    # show user input
    user_question = message
    if user_question:
        docs = knowledge_base.similarity_search(user_question)

        llm = OpenAI()
        chain = load_qa_chain(llm, chain_type="stuff")
        with get_openai_callback() as cb:
            response = chain.run(input_documents=docs, question=user_question)
            return {'response': response}