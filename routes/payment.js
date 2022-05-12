const express = require("express");
const router = express.Router()
const {postPayment} = require("../controllers/paymentController")
/*
    Payment Route and Their Oprations
    Please check paymentController.js for documentation
*/
router.post("/",postPayment)

module.exports = router;