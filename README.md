# Ecommerce App
Seting up the environment.

# Step 1: Create the Project

Open your terminal/command prompt and type:

-> Create main project folder
//mkdir ecommerce-project
//cd ecommerce-project

# Step 2: Setup Frontend (React)

Inside your project folder:

// npx create-react-app client


✅ This will create a folder client/ with React code inside it.

-> Run it:

// cd client
// npm start


Now open http://localhost:3000
 → you’ll see a sample React app 🎉

# Step 3: Setup Backend (Node.js + Express)

-> Go back to project folder:

//cd ..
//mkdir server
//cd server
//npm init -y   # initializes backend project


-> Install backend packages:

// npm install express mongoose cors dotenv bcryptjs jsonwebtoken


{ express → lets us create APIs (like /login, /products).

mongoose → connects Node.js to MongoDB (our database).

cors → lets frontend (React) talk to backend.

dotenv → keeps passwords/keys safe.

bcryptjs → hashes passwords for security.

jsonwebtoken → used for user login sessions.}

-> Create a file: server.js inside server/ folder.
//Put this code:

{const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Sample API
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));}

# Step 4: Connect to MongoDB

-> Go to MongoDB Atlas
 (free cloud database).

1. Create a free cluster.

2. Copy the connection string (looks like this):

{mongodb+srv://username:password@cluster0.mongodb.net/ecommerce}


3. In your server/ folder, create a new file named .env and put:

{MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_secret_key_here
PORT=5000}

# Step 5: Run the Backend

-> Inside server/ folder:

// node server.js


If everything is correct, you’ll see:

{✅ MongoDB connected
✅ Server running on port 5000
Now if you go to http://localhost:5000
 → you’ll see:
Backend is working 🚀}

. <br> . <br> . <br> . <br>

# AUTHENTICATION PAGES (SignUp + LogIn)

=> FRONTEND
1. make pages folder in client/src.
2. make SignUp.js and Login.js file in pages.
3. Write codes in both files (from gpt)
4. Install React Router:
//cd client
//npm install react-router-dom
6. Make some changings in client/src/App.js file (from gpt).


=> BACKEND
1. Create User Model<br>
Inside your backend (server/) folder, create a folder called models and a file User.js
2. Create Auth Routes<br>
Inside server/, create routes folder and auth.js
3. Connect Routes in server.js<br>
Update server.js
4. Connect React Forms to Backend<br>
Install axios in frontend to make HTTP requests:
//cd client
//npm install axios
5. Update signup and login pages (from gpt)

