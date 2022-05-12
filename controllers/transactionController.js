const {transactions} = require("../data/db")

const getTransactions = (req,res)=>{
    /*
        Returns the transactions of the accountNumber.
        We do not a validation here, since transaction history can be zero.
        In case of any server error, we return status code 500(Internal Server Error)
    */
    try {
        const transactionHistory = transactions.filter((transaction)=>transaction.accountNumber === Number(req.params.accountNumber))
        return res.status(200).json(transactionHistory)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
module.exports={
    getTransactions
}