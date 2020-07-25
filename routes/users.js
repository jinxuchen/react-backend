const lodash = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = express.Router();
router.use(cors());
router.use(bodyParser.json());
/* GET users listing. */

let userList = [
  { id: 1, username: "someone" },
  { id: 2, username: "someone_else2" },
];

router.get("/", (req, res, next) => {
  res.json(userList);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const newUser = req.body.username;

  const newId = userList[userList.length - 1].id + 1;

  userList.push({ id: newId, username: newUser });

  res.send("post request to the user: " + newUser);
});

router.delete("/", (req, res) => {
  console.log(req.body);
  const deleteUserId = parseInt(req.body.userId);

  lodash.remove(userList, { id: deleteUserId });
  req.body;
  console.log(userList);

  res.send("delete request to the userList: " + req.body.userId);
});

module.exports = router;
