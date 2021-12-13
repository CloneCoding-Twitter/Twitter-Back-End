const express = require("express");
const connect = require("./schemas");
const router = require("./router/index.js");

const cors = require("cors");
const port = 3000;
const app = express();
// const corsOptions = {
//   origin: "Eco_funding domain",
//   optionsSuccessStatus: 200,
// };

app.use(express.json());
app.use("/api", router);
app.use(express.static("uploads"));
app.use(cors()); // 빈칸으로 두면 모든 요청 허용

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

connect();

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
