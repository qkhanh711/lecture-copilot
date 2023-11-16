FROM node:16-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY next.config.js ./
COPY pages ./
COPY ./.next ./

COPY requirements.txt ./
RUN pip install -r requirements.txt

EXPOSE 3000 8000

CMD ["npm", "run", "dev"]
CMD ["uvicorn", "arc/main:app", "--port","8000"]