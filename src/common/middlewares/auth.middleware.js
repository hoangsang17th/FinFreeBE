

// Next is a middle ware

var middlewareAuth = (req, res, next) => {
    isLogin = true
    tokenValid = true
    if (isLogin && tokenValid)
        // query
        // db.where('id' = req.id).then(data=> req.user = data)
        next()
    else res.send('Login pls!')
}

module.exports = middlewareAuth