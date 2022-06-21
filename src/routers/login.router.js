const express = require('express')

var middlewareAuth = require("../middlewares/auth.middleware.js")

var router = express.Router()
// Define router API

// When routers are overlapped but have different functions, it will give priority to get predefined router

router.post("/login", (req, res) => {
    res.send("Bố nó chớ " + req.body.username)
})

router.get("/register", (req, res) => {
    res.send('Register for your dreams')
})

router.get("/update-password", middlewareAuth, (req, res) => {
    res.send('You can update Password')
})

router.get("/profile/authToken=:token&permission=:permission", (req, res, next) => {
    if (req.params.token.includes('12345'))
        next()
    else res.send('You can now view this profile')
}, (req, res, next) => {
    if (req.params.permission === "Admin")
        next()
    else
        res.send('You have User ID = ' + req.params.token)
}, (req, res) => {
    res.send(`You have User ID = ${req.params.token} And You are ${req.params.permission}`)
})
module.exports = router