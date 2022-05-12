const express = require("express")
const {postWithDraw} = require("../controllers/withdrawController")
/*
    Withdraw Route and Their Oprations
    Please check withdrawController.js file from controllers for documentation
*/
const router = express.Router()
router.post("/",postWithDraw)


module.exports = router;