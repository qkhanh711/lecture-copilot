# Lecture Copilot

Dự án mã nguồn mở của nhóm **GOAT N' BOAT - Trường Đại học Phenikaa.** Dự án đem tới một mã nguồn mở cho phép các nhà quản lý dễ dàng triển khai một công cụ quản lý file, ChatBot LLM từ những mã nguồn mở có sẵn.
Ưu điểm của dự án là dễ dàng tạo nên một công cụ có thể dễ dàng truy cập trong mạng nội bộ của các trường học, tổ chức. Hỗ trợ tổng hợp, truy vấn, hỏi đáp nội dung các file liệu dựa trên API **chat-gpt-3.5**. Ngoài ra hệ thống còn có phương pháp quản lý file dữ liệu, sắp xếp theo nội dung hoặc dựa trên công cụ tìm kiếm nhanh chóng.

Mã nguồn sẽ được xây dựng và hoàn thiện dần dần các tính năng. Trong các giai đoạn tiếp theo, mã nguồn sẽ được hoàn thiện để có thể triển khai trong các hệ thống nội bộ, bảo đảm bảo mật cho các tổ chức, doanh nghiệp. Tiến độ dự án có thể theo dõi ở bên dưới:

* [X] Upload lưu trữ file
* [X] QnA file với **chat-gpt-3.5**
* [ ] Quản lý người dùng
* [ ] Thực hiện các tùy chỉnh triển khai trong môi trường nội bộ
* [ ] Cho phép chạy mô hình AI Chatbot tùy chỉnh tại server
* [ ] Quản lý, sắp xếp file
* [ ] Tìm kiếm file theo nội dung

## Triển khai

Ta cần phải tải mã nguồn về máy:

```bash
git clone https://github.com/qkhanh711/lecture-copilot
cd lecture-copilot
```

## Thiết lập các API Keys

Trong giai đoạn này, dự án vẫn đang sử dụng các công cụ mã nguồn mở khác dưới dạng API trả phí để đảm bảo dễ dàng triển khai trong nhiều thiết bị. Các công cụ này sẽ có mất phí nếu nhu cầu sử dụng vượt quá Free-tier của các công cụ. Đế sử dụng tiếp, các công cụ sẽ thu thêm tiền theo nhu cầu sử dụng.

**Các API Keys dù có gia hạn phí thì việc thiết lập API Keys thì chỉ cần một lần duy nhất**.

API sẽ được lưu trong file .env

```
touch .env
```

Nội dung của file sẽ gồm

```
#NeonDB
DATABASE_URL=

# AWS S3
NEXT_PUBLIC_S3_ACCESS_KEY_ID=
NEXT_PUBLIC_S3_SECRET_ACCESS_KEY_ID=
NEXT_PUBLIC_S3_BUCKET_NAME=

# PINECONE
PINECONE_ENVIRONMENT=
PINECONE_API_KEY=

OPENAI_API_KEY = 
```

### Hướng dẫn lấy API cho từng công cụ

[NeonDB](https://www.youtube.com/watch?v=kUKfi9bCo80)

[AWS S3](https://www.youtube.com/watch?v=39X5WdZbEwQ)

[Pincone](https://www.youtube.com/watch?v=_gC9wWWBjmY)

## Chạy với Docker

Ta sẽ chạy 2 câu lệnh như sau để dự án có thể triển khai trên localhost:

```
docker build -t lecture_copilot:0.1.1 .

docker run -p 3000:3000 -p 8000:8000 lecture_copilot:0.1.1
```

**!!!!!Lưu ý!!!!!:** Trong trường hợp bạn thay đổi API Keys, bạn phải chạy 2 câu lệnh này lại một lần nữa

## Triển khai với Vercel

Ngoài ra ta có thể dễ dàng hiện công khai dự án với Vercel.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Công cụ sử dụng
[PineconeDB](https://www.pinecone.io/)

[NeonDB](https://neon.tech/)

[NextJS](https://nextjs.org/)

[AWS S3](https://aws.amazon.com/s3)

[FastAPI](https://fastapi.tiangolo.com/)

[LangChain](https://python.langchain.com/docs/get_started/introduction)

## Debug

Mọi vấn đề về code xin vui lòng liên hệ tới email:  21011488@st.phenikaa-uni.edu.vn  -- (Duy Anh)
