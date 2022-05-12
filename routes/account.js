const express = require("express")
const router = express.Router()
const {postAccount,getAccount} = require("../controllers/accountController")
/* 
    Account Route and Their Operations
    Please look to the Controllers for more documentation!
*/
router.post("/",postAccount)
router.get("/:accountNumber",getAccount)

module.exports = router;