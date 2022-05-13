const request = require("supertest")
const app = require("./server");
describe("PaymentAPI Test",()=>{
    it("POST /account : Add First Account",(done)=>{
        request(app)
        .post("/account")
        .send({
            accountNumber:1,
            currencyCode:"TRY",
            ownerName:"sina",
            accountType:"individual"
        })
        .expect(200)
        .then((res)=>{
            expect(res.body).toEqual({
                accountNumber: 1,
                currenncyCode: 0,
                ownerName: "sina",
                accountType: 0,
                balance: 0
            })
            done()
        })
    },7000)
    it("POST /account : Add Second Account",(done)=>{
        request(app)
        .post("/account")
        .send({
            accountNumber:2,
            currencyCode:"TRY",
            ownerName:"onat",
            accountType:"individual"
        })
        .expect(200)
        .then((response)=>{
            expect(response.body).toEqual(
                {
                    accountNumber: 2,
                    currenncyCode: 0,
                    ownerName: "onat",
                    accountType: 0,
                    balance: 0
                }
            )
            done()
        })
    },7000)
    it("GET /account/{accountNumber}:GET ACCOUNT 1",(done)=>{
        request(app).get("/account/1")
        .send()
        .expect(200)
        .then((res)=>{
            expect(res.body).toEqual({
                accountNumber: 1,
                currenncyCode: 0,
                ownerName: "sina",
                accountType: 0,
                balance: 0
            })
            done()
        })
    })
    it("POST /payment",(done)=>{
        request(app).post("/payment")
        .send({
            senderAccount:1,
            recieverAccount:2,
            amount:10
        })
        .expect(200)
        .then((response)=>{
            expect(response.body).toEqual({
                accountNumber: 1,
                amount: 10,
                transactionType: 1,
                createdAt: "Fri May 13 2022"
            })
            done()
        })
    })
    it("POST /deposit",(done)=>{
        request(app).post("/deposit")
        .send({
            accountNumber:2,
            amount:10
        })
        .expect(200)
        .then((response)=>{
            expect(response.body).toEqual({
                accountNumber: 2,
                amount: 10,
                transactionType: 2,
                createdAt: "Fri May 13 2022"
            })
            done()
        })
    })
    it("POST /withdraw",(done)=>{
        request(app).post("/withdraw")
        .send({
            accountNumber:2,
            amount:10
        })
        .expect(200)
        .then((response)=>{
            expect(response.body).toEqual({
                accountNumber: 2,
                amount: 10,
                transactionType: 3,
                createdAt: "Fri May 13 2022"
            })
            done()
        })
    })
    it("GET /accounting/{accountNumber}:GET Transaction 2",(done)=>{
        request(app).get("/accounting/2")
        .expect(200,done)
    })
})