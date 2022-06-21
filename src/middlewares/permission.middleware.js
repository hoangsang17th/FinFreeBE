var middlewarePermission = (req, res, next) => {
    isAdmin = false
    if (isAdmin)
        next()
    else res.send('You are not an administrators')
}

module.exports = middlewarePermission