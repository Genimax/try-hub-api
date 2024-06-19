import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import router from "./router.js";
import cors from "cors";

const PORT = 3005;
const app = express();

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

app.use(bodyParser.json());

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});

app.use("/", router);
app.use("/streamer", router);
