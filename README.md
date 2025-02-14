# assement-auth

This is a simple backend API built using Node.js, Express.js, and MongoDB. It allows users to sign up, log in, view their profile, and search for other users. The authentication is handled using JWT (JSON Web Tokens) to ensure secure access to protected routes.

### **🛒 User Authentication API (Express.js + MongoDB)**

This is a **backend API** built using **Node.js, Express.js, and MongoDB**. It allows users to **sign up, log in, view their profile, and search for other users**. Authentication is handled securely using **JWT (JSON Web Tokens)**.

---

## **🚀 Features**

✅ **User Registration & Login** (JWT Authentication)  
✅ **View Profile (Protected Route)**  
✅ **Search Users by Username or Email**  
✅ **Password Hashing (Bcrypt.js) for Security**  
✅ **Protected API Routes using Middleware**

---

## **🛠 Tech Stack**

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token), Bcrypt.js
- **Environment Variables:** Dotenv
- **API Testing:** Postman

---

## **📌 Setup Instructions**

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/yourusername/auth-api.git
cd auth-api
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Set Up Environment Variables**

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
```

🔹 Replace `<username>`, `<password>`, and `<dbname>` with your **MongoDB credentials**.

### **4️⃣ Start the Server**

```bash
npm start
```

If everything is working fine, you should see:

```
✅ MongoDB Connected
🚀 Server running on port 5000
```

---

## **📂 Folder Structure**

This project follows a **clean and organized structure**.

```
auth-api/
│── src/
│   ├── config/           # Database connection settings
│   ├── controllers/      # Handles API logic (Signup, Login, Profile, Search)
│   ├── middleware/       # JWT Authentication middleware
│   ├── models/           # Mongoose schemas for User
│   ├── routes/           # API endpoints for authentication & user actions
│   ├── server.js         # Main backend entry point
│── .env                  # Environment variables (Not pushed to GitHub)
│── package.json          # Project metadata & dependencies
│── README.md             # Documentation
```

### 📂 **`src/` - Main Backend Folder**

Contains all backend code.

### 📂 **`config/` - Configuration Files**

- Handles **MongoDB connection setup**.
- Loads environment variables from **`.env`**.

### 📂 **`controllers/` - API Logic**

- Manages user **signup, login, profile retrieval, and user search**.

### 📂 **`middleware/` - Authentication Middleware**

- Verifies **JWT token for protected routes**.
- Ensures only **authenticated users** can access certain endpoints.

### 📂 **`models/` - Database Models**

- Defines the **User schema** using Mongoose.
- Enforces **data validation & structure** in MongoDB.

### 📂 **`routes/` - API Endpoints**

- Defines API **routes and connects them to controllers**.
- Example routes: `/api/auth/signup`, `/api/users/profile`.

### 📜 **`server.js` - Main Entry Point**

- Initializes **Express.js server**.
- Loads **routes, middleware, and database connection**.
- Runs the **backend application**.

---

## **📌 API Endpoints (Test in Postman)**

| **Endpoint**                   | **Method** | **Description**               | **Auth Required?** |
| ------------------------------ | ---------- | ----------------------------- | ------------------ |
| `/api/auth/signup`             | `POST`     | Register a new user           | ❌ No              |
| `/api/auth/login`              | `POST`     | Login & get JWT token         | ❌ No              |
| `/api/users/profile`           | `GET`      | Get logged-in user's profile  | ✅ Yes (JWT)       |
| `/api/users/search?q=username` | `GET`      | Search user by username/email | ✅ Yes (JWT)       |

📌 **For protected routes, send the JWT token in headers:**

```
Authorization: Bearer your_token_here
```
