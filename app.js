const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use(cors());

const port = 3001;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
