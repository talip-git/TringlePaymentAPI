const {accounts} = require("../data/db")
const utils = require("../utils/util")
const postAccount = (req,res)=>{
    /* 
        Checks the currencycode and the accountType of the request body. 
        If the currencyCode and accountType is not in the given enums, we return response with status code 400, indicating bad request. 
        If the currencyCode and accountType is in the enums, and the accountNumber does not exists in the db(memory in this case), 
        we create the account, default balance is 0.
        !!!Important note, enums are basicily special integers, we cant directly create enums in Javascript therefore, 
        I created constant arrays with supported currencies and account types in the utils directory, 
        we pick the enums based on the array index. 
        In case of any server error, we return status code 500(Internal Server Error)
    */
    try {
        const currencyCode = utils.currencies.indexOf(req.body.currencyCode)
        const accountType = utils.accountTypes.indexOf(req.body.accountType)
        if(currencyCode === -1 ||accountType === -1){
            return res.status(400).json("Currency Code or Account type not supported!!\nPlease check your credentials!!!");
        }
        if(accounts.find((element)=>element.accountNumber === req.body.accountNumber)){
            return res.status(400).json("Account Number Exists!!");
        }
        const account = {
            accountNumber:req.body.accountNumber,
            currenncyCode:currencyCode,
            ownerName:req.body.ownerName,
            accountType:accountType,
            balance:0  
        }
        accounts.push(account)
        return res.status(200).json(account);   
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}
const getAccount = (req,res)=>{
    /*
        Checks the account based on the parameter,
        if the accound exists, we return it with the status code 200
        else, we return 404 Not Found
        In case of any server error, we return status code 500(Internal Server Error)    
    */
    try {
        const account = accounts.find((account)=>{
            return account.accountNumber === Number(req.params.accountNumber)
        })
        if(!account){
            return res.status(404).json("Account Not Found!");
        }
        return res.status(200).json(account)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
module.exports = {
    postAccount,
    getAccount
}