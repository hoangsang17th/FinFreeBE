const express = require('express')
var morgan = require('morgan')
// const { initializeApp } = require('firebase/app');
// const { getFirestore, collection, getDocs } = require('firebase/firestore')
var bodyParser = require('body-parser')

var router = require("./src/routers/login.router.js")

var middlewareAuth = require("./src/middlewares/auth.middleware.js")
var middlewarePermission = require("./src/middlewares/permission.middleware.js")

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(morgan('combined'))
app.use("/auth", router)
app.get('/', middlewareAuth, middlewarePermission, (req, res) => {
    res.send('Phạm Hoàng Sang')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})