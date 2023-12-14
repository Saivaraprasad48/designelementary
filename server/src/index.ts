import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import RoutesHandler from "./routes";
import connectToDb from "./utils/db";

const port = process.env.PORT || 8080;

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

// connectToDb();
RoutesHandler(app);

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
