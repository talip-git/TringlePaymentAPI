# Tringle Payment API 
In this API, we simulate a basic payment transaction API.<br/>

**There is No Database connection, everything is stored in the memory**
# Run With Docker
Run the following commands in order to run it with docker <br/>
  ```
  docker build https://github.com/talip-git/TringlePaymentAPI.git -t tringle 
  docker run -p 5050:5050 tringle 
  ```
# Run The API Without Docker
If you are not going to use Docker, then you need to install Node.js to your computer first.
Firstly open your cmd and cd to the project directory, then run **npm install** command, this will install the dependencies you need.
After you install the dependencies run **npm start** command, this will start the application.

## Runing Tests
Run **npm test** command the start the tests.

## API
**We have 5 different routes in this API.**<br/>
- /account
- /payment
- /deposit
- /withdraw
- /accounting

## Account
This route has 2 API end points,and is responsible for account operations.<br/>
### Account Controller
Account controller has two functions:<br/><br/>
      **postAccount**<br/>
      Checks the currencycode and the accountType of the request body
      if the currencyCode and accountType is not in the given enums
      we return response with status code 400, indicating bad request.
      If the currencyCode and accountType is in the enums, and the accountNumber does not
      exists in the db(memory in this case) we create the account, default balance is 0.<br/>
      **!!!Important note, enums are basicily special integers, we cant directly create enums in Javascript
      therefore, I created constant arrays with supported currencies and account types in the utils directory
      we pick the enums based on the array index
      In case of any server error, we return status code 500(Internal Server Error)**<br/><br/>
      **getAccount**<br/>
        Checks the account based on the parameter, if the accound exists, we return it with the status code 200 else, we return 404 Not Found.
        In case of any server error, we return status code 500(Internal Server Error).  
    
## Payment
This route has 1 API end point,and is responsible for payment operations.<br/>
### Payment Controller
Payment controller has one function:<br/><br/>
      **postPayment**<br/>
        This controller is responsible for the payments in the API,
        Firstly, we check whether the given sender accounts and reviever accounts
        exists, if the exists then we take the given amount from the senders balance,
        and add that amount to the recievers amount. Furthermore, we create a transaction
        with type 1 indicating payment and push it to our Transactions array.
        If either one of the accountNumbers is wrong, then we send a request with status code 404.
        Later we update the senders and recievers account.
        In case of any server error, we return status code 500(Internal Server Error).<br/><br/>  
## Deposit
This route has 1 API end point,and is responsible for deposit operations.<br/>
### Deposit Controller
Deposit controller has one function:<br/><br/>
      **postDeposit**<br/>
        This controller is responsible for depositing to the account balance.
        Firstly we check whether the acccount number exists, if exists, we continue,
        else we return a response with status code 404 Not Found
        If the account number exists, then we increase the balance of the account
        according to the given amount in the request body.
        Furthermore,we crate a Transaction with the date today and type 2(indicating deposit)
        and add them to our db(memory in this API)
        In case of any server error, we return status code 500(Internal Server Error).<br/><br/>  
## Withdraw
This route has 1 API end point,and is responsible for withdraw operations.<br/>
### Withdraw Controller
Withdraw controller has one function:<br/><br/>
      **postWithdraw**<br/>
        Controller which is responsible for withdraw operation.
        Firstly we check whether is the given accountNumber exists in our accounts array,
        if exists,then we withdraw the amount from the accounts balance.
        !!Remember that amount is given in the response body!!
        If the account number does not exists then we return status code 404(Not Found).
        In case of any server error, we return status code 500(Internal Server Error).<br/><br/>  
## Accounting
This route has 1 API end point,and is responsible for transaction operations.<br/>
### TransactionController
Transaction controller has one function:<br/><br/>
      **getTransactions**<br/>
        Returns the transactions of the accountNumber.
        We do not a validation here, since transaction history can be zero.
        In case of any server error, we return status code 500(Internal Server Error)<br/><br/>  
