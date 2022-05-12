const {accounts,transactions} = require("../data/db")
const postWithDraw = (req,res)=>{
    /*
        Controller which is responsible for withdraw operation.
        Firstly we check whether is the given accountNumber exists in our accounts array,
        if exists,then we withdraw the amount from the accounts balance.
        !!Remember that amount is given in the response body!!
        If the account number does not exists then we return status code 404(Not Found).
        In case of any server error, we return status code 500(Internal Server Error).
    */
    try {
        const accountIndex = accounts.findIndex((account) =>account.accountNumber === req.body.accountNumber);
        if(accountIndex === -1){
            return res.status(404).json("Account Number not found!!!")
        }

        const account = accounts[accountIndex];
        account.balance += req.body.amount;

        const transaction = {
            accountNumber:account.accountNumber,
            amount:req.body.amount,
            transactionType:3,
            createdAt: new Date().toDateString()
        }

        transactions.push(transaction)
        accounts[accountIndex] = account;
        return res.status(200).json(transaction)
    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = {
    postWithDraw
}