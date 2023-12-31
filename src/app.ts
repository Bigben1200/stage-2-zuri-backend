import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbconfig";
import usersRoute from "./routes/usersRoute";

dotenv.config();

const app = express();
connectDatabase();
const port = process.env.PORT || 3050;

app.use(express.json());
app.use(bodyParser.json());

app.use("/api", usersRoute);

//routes for crud

app.listen(port, () => {
  console.log(
    `profile api is running at http://localhost:${port}/api?slack_name=BensonEniola&track=backend`
  );
});
export default app;
