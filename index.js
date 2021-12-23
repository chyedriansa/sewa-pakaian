import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import routes from "./routes.js";

mongoose.connect("mongodb://localhost:27017/sewa_pakaian", {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.on("error", (e) => console.log("error detected"));
connection.once("open", () => console.log("Succes to connect MongoDB"));

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen("3000", () =>
  console.log("Success to running 3000 server on this port")
);
