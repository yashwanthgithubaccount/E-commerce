import express from "express";
import App from './../frontend/src/App';

const App = express();

app.get("/", (req, res) => {
  res.send("connected");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening the port http://localhost/" + port);
});







const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
