const {accounts,transactions} = require('../data/db')
const postDeposit = (req,res)=>{
    /*
        This controller is responsible for depositing to the account balance.
        Firstly we check whether the acccount number exists, if exists, we continue,
        else we return a response with status code 404 Not Found
        If the account number exists, then we increase the balance of the account
        according to the given amount in the request body.
        Furthermore,we crate a Transaction with the date today and type 2(indicating deposit)
        and add them to our db(memory in this API)
        In case of any server error, we return status code 500(Internal Server Error).
    */
    try {
        const accountIndex = accounts.findIndex((account) =>account.accountNumber === req.body.accountNumber);
        if(accountIndex ===-1){
            return res.status(404).json("Account Number not found!!!")
        }

        const account = accounts[accountIndex];
        account.balance += req.body.amount;

        const transaction = {
            accountNumber:account.accountNumber,
            amount:req.body.amount,
            transactionType:2,
            createdAt: new Date().toDateString()
        }

        transactions.push(transaction)
        accounts[accountIndex] = account;
        return res.status(200).json(transaction)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
module.exports = {
    postDeposit
}