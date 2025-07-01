Demonstration Video : https://1drv.ms/v/c/88248de4da4c08c3/EWnWBVqMz-1BokkfTdi0_ZABCCddJ7nlv4dpKn5I_1cdfQ?e=phmAhf

✍ ScribbleAI 🎨

Unleash your creativity with the power of AI!

ScribbleAI is a full-stack AI-powered web application that lets users generate creative content and stunning images, manage credits, and upgrade via flexible plans. Built with React, Node.js, and MongoDB, it's secure, responsive, and feature-rich.


---

✨ Features

🔐 User Authentication with JWT

🛡 Secure Password Hashing using bcrypt

💳 Credit-Based System for generation tasks

🛍 Plan Purchase System to top-up credits

🖼 Image & Content Generation using AI

📱 Responsive UI powered by Tailwind CSS

🔔 Toast Notifications for seamless feedback

🔒 Protected Routes & session handling



---

🧰 Tech Stack

Frontend: React ⚛, React Router 🔀, Tailwind CSS 💨, Axios 📡, React Toastify 🍞

Backend: Node.js 🌐, Express.js 🚂, MongoDB 🍃, Mongoose 🧬, JWT 🪪, bcrypt 🔑

Other: Framer Motion 🎞 (animations), dotenv 🌱 (env variables)



---

🚀 Getting Started

✅ Prerequisites

Node.js (v16+ recommended)

npm or yarn

MongoDB Atlas account (or local instance)


🛠 Installation

1. Clone the Repository

git clone https://github.com/yourusername/scribbleai.git
cd scribbleai

2. Setup the Backend 🔙

cd Server
npm install

📝 Create a .env file in the Server directory:

PORT=5000
MONGODB_URI="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret"

▶ Start the backend server:

npm start

3. Setup the Frontend 🔜

cd ../Client/scribble-ai
npm install
npm start

🌐 Visit http://localhost:3000 to explore the app.


---

🧑‍💻 Usage

1. 📝 Register or login to your account


2. ✨ Generate content or images with credits


3. 💸 Purchase additional credits via the Buy Credit page


4. 👤 Manage your profile & view credit balance in the navbar




---

📁 Folder Structure

ScribbleAI/
├── Client/
│   └── scribble-ai/        # ⚛ React frontend
├── Server/
│   ├── controllers/        # 🎮 Express controllers
│   ├── models/             # 🧬 Mongoose models
│   ├── routes/             # 🛣 Express routes
│   └── ...                 # 🧾 Configs, middleware, etc.


---

🔐 Environment Variables

Set these in your .env file:

MONGODB_URI — Your MongoDB connection string

JWT_SECRET — Secret for JWT signing



---

📄 License

📝 This project is licensed under the MIT License.


---

Made with ❤ and AI for creative minds everywhere! 🌍✨

