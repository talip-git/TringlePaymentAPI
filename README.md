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

### Account
This route has 2 API end points,and is responsible for account operations.<br/>
For more documentation, please look to the **account controller** in **Controllers** directory
#### Account Controller
Account controller has two functions:<br/><br/>
      **PostAccount**<br/>
      Checks the currencycode and the accountType of the request body
      if the currencyCode and accountType is not in the given enums
      we return response with status code 400, indicating bad request.
      If the currencyCode and accountType is in the enums, and the accountNumber
      does not exists in the db(memory in this case) we create the account, default balance is 0.<br/>
      **!!!Important note, enums are basicily special integers, we cant directly create enums in Javascript
      therefore, I created constant arrays with supported currencies and account types in the utils directory
      we pick the enums based on the array index
      In case of any server error, we return status code 500(Internal Server Error)**<br/><br/>
      **GetAccount**<br/>
        Checks the account based on the parameter, if the accound exists, we return it with the status code 200 else, we return 404 Not Found.
        In case of any server error, we return status code 500(Internal Server Error).  
    
### Payment
This route has 1 API end point,and is responsible for payment operations.<br/>
For more documentation, please look to the **payment controller** in **Controllers** directory

### Deposit
This route has 1 API end point,and is responsible for deposit operations.<br/>
For more documentation, please look to the **deposit controller** in **Controllers** directory

### Withdraw
This route has 1 API end point,and is responsible for withdraw operations.<br/>
For more documentation, please look to the **withdraw controller** in **Controllers** directory

### Accounting
This route has 1 API end point,and is responsible for transaction operations.<br/>
For more documentation, please look to the **transaction controller** in **Controllers** directory
