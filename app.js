import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import router from "./router.js";

const PORT = 3000;
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});

app.use("/", router);
app.use("/streamer", router);
