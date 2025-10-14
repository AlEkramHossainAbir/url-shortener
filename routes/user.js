const express = require("express");
const router = express.Router();

const {handleGetUser,handleUserSignUp} = require("../controllers/user")

router.post("/", handleUserSignUp)

module.exports = router;