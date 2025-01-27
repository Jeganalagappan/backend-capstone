const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");



require("dotenv").config();

//require the .env data
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;



app.use(express.json());
app.use(cors());

const studentRouter = require("./Routes/studentRoutes");
const loginRouter = require("./Routes/loginRoutes");
const capstoneRouter = require("./Routes/capstoneRoutes");
const leaveRouter = require("./Routes/leaveRoutes")
const portfolioRouter =require("./Routes/portfolioRoutes")
const queryRouter =require("./Routes/queryRoutes")
const taskRouter =require("./Routes/taskRoutes")
const webcodeRouter =require("./Routes/webcodeRoutes")

// db connect const mongoose = require('mongoose');

// Set strictQuery option to suppress the deprecation warning
mongoose.set('strictQuery', false);

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://<jegan>:<jegan>@cluster0.icmor.mongodb.net/<@admin>?retryWrites=true&w=majority')
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// checking the postman api
app.get("/", (req, res) => {
  res.send("Welcome to Zen-Dashboard");
});

app.use(studentRouter);
app.use(loginRouter);
app.use(capstoneRouter);
app.use(leaveRouter);
app.use(portfolioRouter);
app.use(queryRouter);
app.use(taskRouter);
app.use(webcodeRouter);

// listening port 
app.listen(PORT, () => {
  console.log("successfully running on the port", PORT);
})


module.exports = app;