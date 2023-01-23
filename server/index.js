import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import { register, login } from "./set/account.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/registerpage", register);
app.post("/loginpage", login);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

mongoose
    .connect("mongodb://127.0.0.1:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database is connected succesfully!");
    })
    .catch((err) => {
        console.log(err);
    });







