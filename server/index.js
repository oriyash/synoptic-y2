// import config
import "dotenv/config";

// importing dependencies
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// importing routes
import reportRouter from "./routes/report.js";
import indexRouter from "./routes/index.js";

// app init
const app = express();

// env vars
const PORT = process.env.PORT;
const dbUrl = process.env.DBURL;

// connecting to db
try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB Connected");
} catch (error) {
    console.log(error);
}

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

// routes
app.use("/", indexRouter);
app.use("/report", reportRouter);

// listen
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
