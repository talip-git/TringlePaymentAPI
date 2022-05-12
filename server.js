const express = require("express")
const morgan = require("morgan")
const accountRoute = require('./routes/account')
const paymentRoute = require('./routes/payment')
const depositRoute = require('./routes/deposit')
const withDrawRoute = require('./routes/withdraw');
const accountingRoute = require('./routes/transaction')

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use("/account",accountRoute);
app.use("/payment",paymentRoute);
app.use("/deposit",depositRoute)
app.use("/withdraw",withDrawRoute);
app.use("/accounting",accountingRoute);


app.listen(5050,()=>{
    console.log(`Server is listening on port ${5050} ...`)
})