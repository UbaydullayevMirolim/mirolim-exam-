const isAuth = (req, res, next) => {

    const {token} = req.cookies;
    if (!token)
    return res.redirect("")
}

module.exports = isAuth;