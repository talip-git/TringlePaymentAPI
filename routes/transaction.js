const express = require("express")
const {getTransactions} = require("../controllers/transactionController")
const router = express.Router()
/*
    Transaction Route and Their Oprations
    Please check transactionController.js file from controllers for documentation
*/
router.get("/:accountNumber",getTransactions)


module.exports = router;