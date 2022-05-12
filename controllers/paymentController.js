const {accounts,transactions} = require("../data/db")
const postPayment = (req,res)=>{
    /*
        This controller is responsible for the payments in the API,
        Firstly, we check whether the given sender accounts and reviever accounts
        exists, if the exists then we take the given amount from the senders balance,
        and add that amount to the recievers amount. Furthermore, we create a transaction
        with type 1 indicating payment and push it to our Transactions array.
        If either one of the accountNumbers is wrong, then we send a request with status code 404.
        Later we update the senders and recievers account.
        In case of any server error, we return status code 500(Internal Server Error)
    */
    try {
        const senderIndex = accounts.findIndex((account) =>account.accountNumber === req.body.senderAccount);
        const recieverIndex = accounts.findIndex((account) => account.accountNumber === req.body.recieverAccount);
        if(senderIndex === -1 || recieverIndex === -1){
            return res.status(404).json("Sender or Reciever number not found!!!")
        }

        const sender = accounts[senderIndex];
        const reciever = accounts[recieverIndex];

        sender.balance -= req.body.amount;
        reciever.balance += req.body.amount;

        const transaction = {
            accountNumber:sender.accountNumber,
            amount:req.body.amount,
            transactionType:1,
            createdAt: new Date().toDateString()
        }

        transactions.push(transaction)

        accounts[senderIndex] = sender;
        accounts[recieverIndex] = reciever;
        return res.status(200).json(transaction)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
module.exports = {
    postPayment
}