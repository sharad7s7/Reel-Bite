📌 Reel-Bite 🍔🎥 (Docker + MongoDB + ImageKit)

Reel-Bite is a food-reels platform where:
Users can watch food reels, like & save reels
Food Partners can upload food reels

This project runs fully using Docker Compose with:

MongoDB
Mongo Express
Backend (Node.js + Express)
Frontend (React + Vite)

🚀 Run Project (Docker Compose)

1️⃣ Clone the repo
git clone <https://github.com/sharad7s7/Reel-Bite>
cd Reel-Bite

2️⃣ Setup environment variables

Go to backend/ and create .env:

cd backend
cp .env.example .env

Go to frontend/ and create .env:

cd ../frontend
cp .env.example .env

3️⃣ Run Docker Compose

From project root: docker compose up -d


🌐 Open the Application
Frontend: 👉 http://localhost:5173

Backend: 👉 http://localhost:5000

Mongo Express (DB UI): 👉 http://localhost:8081

👨‍💻 Author

Made by Sharad 🚀