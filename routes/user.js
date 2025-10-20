const express = require("express");
const router = express.Router();

const {handleUserLogin,handleUserSignUp} = require("../controllers/user")

router.post("/", handleUserSignUp)

router.post("/login", handleUserLogin)

module.exports = router;