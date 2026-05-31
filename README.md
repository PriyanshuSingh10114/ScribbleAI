<div align="center">
  <h1>🎨 ScribbleAI - Creative Studio Platform</h1>
  <p><strong>A Production-Grade Full-Stack AI Content Generation & Design Studio</strong></p>

  [![React](https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react)](https://react.dev/)
  [![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=flat-square&logo=node.js)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Database-success?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](#)
</div>

---

## 🌟 Overview

**ScribbleAI** has evolved from a simple text-to-image generator into a comprehensive, professional **AI Creative Studio**. It empowers creators, marketers, and developers to generate, edit, and manage high-quality AI assets through a unified, centralized dashboard. 

Built with scalability in mind, the platform features a multi-layered backend architecture, secure token-based authentication, a credit-billing system, and a pixel-perfect, responsive React frontend.

---

## 🚀 Key Features

### 🎨 1. AI Creative Tools Hub
A centralized suite of 14 powerful AI tools, categorized for a seamless workflow:
- **Image Creation**: Advanced Text-to-Image Generation, Image Variations, and Professional Avatar Studio.
- **Design Tools**: Automated Logo Generation, YouTube Thumbnail Maker, and Poster Design.
- **Content Tools**: AI Chat Assistant for prompt brainstorming, Brand Kit Generator, and a Prompt Library.
- **Image Editor**: In-browser tools for background removal, upscaling, and outpainting.

### 💼 2. Command Center Dashboard
- **Real-Time Analytics**: Track total generations, downloads, favorite tools, and credit usage.
- **Recent Activity**: Quickly resume work on your latest creations.
- **Project Workspace**: Organize generated assets into custom folders and manage campaigns effectively.

### 🔐 3. Enterprise-Grade Backend
- **Multi-Provider AI Abstraction**: Standardized service layer supporting OpenAI, Gemini, and Grok.
- **Layered Architecture**: Clean separation of concerns using MVC (Routes → Controllers → Services → Models).
- **Security**: Robust JWT authentication, bcrypt password hashing, and Zod input validation.

---

## 🛠️ Technology Stack

### **Frontend**
- **Framework**: React 19 (Vite)
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4 & Lucide React Icons
- **Animations**: Framer Motion
- **State/Requests**: Axios & Context API
- **Notifications**: React Toastify

### **Backend**
- **Runtime**: Node.js & Express.js v4.22
- **Database**: MongoDB (Mongoose ODMs)
- **Authentication**: JSON Web Tokens (JWT) & bcrypt
- **DevOps**: Docker & Docker Compose (with automated Healthchecks)

---

## 🏗️ Architecture Design

ScribbleAI follows a scalable, Service-Oriented Architecture (SOA):

```text
Client (React 19)  ──(REST APIs)──>  API Gateway (Express.js)
                                          │
                                          ├──> Controllers (Business Logic)
                                          │       └──> Services (External APIs)
                                          │               ├──> AI Provider (Gemini/OpenAI)
                                          │               └──> Payment Gateway
                                          │
                                          └──> Models (Mongoose)
                                                  └──> MongoDB Cluster
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas cluster)
- Package Manager: `npm` or `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/scribble-ai.git
cd scribble-ai
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/scribbleai
JWT_SECRET=your_super_secret_jwt_key
AI_PROVIDER=gemini # Choose from: gemini, openai, grok
GEMINI_API_KEY=your_gemini_key
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
```

Start the Vite development server:
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

---

## 🐳 Docker Deployment

The platform is fully containerized for production deployment.

```bash
# Build and start all services (Frontend, Backend, Database)
docker-compose up --build -d

# Check service health
docker ps
```
*Note: The `docker-compose.yml` includes native healthchecks to ensure the Node backend and MongoDB instances are fully ready before accepting traffic.*

---

## 📚 API Endpoints Reference

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/auth/register` | Register a new user account | ❌ |
| `POST` | `/api/auth/login` | Authenticate and retrieve JWT | ❌ |
| `GET` | `/api/user/profile` | Get current user details & credits | ✅ |
| `POST` | `/api/ai/generate` | Generate a standard AI image | ✅ |
| `POST` | `/api/studio/avatar` | Generate a professional avatar | ✅ |
| `POST` | `/api/studio/logo` | Generate a brand logo | ✅ |

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

<div align="center">
  <p>Built with ❤️ by the ScribbleAI Team.</p>
</div>
