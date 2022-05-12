const express = require("express")
const router = express.Router()
const {postDeposit} = require("../controllers/depositController")
/*
    Deposit Route and Their Oprations
    Please check depositController.js for more documentation
*/
router.post("/",postDeposit)

module.exports = router;