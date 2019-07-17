var express = require("express");
var debug = require("debug")("router");
var fs = require("fs");
var morgan = require("morgan");
var path = require("path");
var router = express.Router();

const { addUser } = require("../services/user.service");
const { getAllUsers } = require("../services/user.service");
const { getUserById } = require("../services/user.service");
const { deleteUserById } = require("../services/user.service");
const { updateUserById } = require("../services/user.service");
const { isAuthorized } = require("../middlewares/auth.middleware");

//creating log directory
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a"
});
router.use(morgan("combined", { stream: accessLogStream }));

//get all users
router.get("/", function(req, res, next) {
  //debug
  debug(req.method + " " + req.url);
  console.log("Cookies: ", req.cookies);
  console.log("Signed Cookies: ", req.signedCookies);

  const result = getAllUsers();

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).send(`<h1>Cant't load users</h1>`);
  }
});

//get user by id
router.get("/:id", function(req, res, next) {
  //debug
  debug(req.method + " " + req.url);
  console.log("Cookies: ", req.cookies);
  console.log("Signed Cookies: ", req.signedCookies);

  const result = getUserById(req.params.id);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).send(`<h1>Couldn't find user with this id</h1>`);
  }
});

//add user using request-body data
router.post(
  "/",
  /*isAuthorized, */ function(req, res, next) {
    //debug
    debug(req.method + " " + req.url);
    console.log("Cookies: ", req.cookies);
    console.log("Signed Cookies: ", req.signedCookies);

    const result = addUser(req.body);

    if (result) {
      res.send(`<h1>Succesfully added </h1>`);
    } else {
      res.status(400).send(`<h1>Cant't add user</h1>`);
    }
  }
);

//add user using request-body data
router.delete("/:id", isAuthorized, function(req, res, next) {
  //debug
  debug(req.method + " " + req.url);
  console.log("Cookies: ", req.cookies);
  console.log("Signed Cookies: ", req.signedCookies);

  const result = deleteUserById(req.params.id);
  if (result) {
    res.send(`<h1>Succesfully deleted</h1>`);
  } else {
    res.status(400).send(`<h1>Cant't delete user</h1>`);
  }
});

//add user using request-body data
router.put("/:id", isAuthorized, function(req, res, next) {
  //debug
  debug(req.method + " " + req.url);
  console.log("Cookies: ", req.cookies);
  console.log("Signed Cookies: ", req.signedCookies);

  const result = updateUserById(req.params.id, req.body);
  if (result) {
    res.send(`<h1>Succesfully updated<h1>`);
  } else {
    res.status(400).send(`<h1>Cant't update user</h1>`);
  }
});

module.exports = router;
