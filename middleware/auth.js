const {jwt, verify} = require('jsonwebtoken');
const config = require('../config/auth');

verifyToken = (req, res, next) => {
    let token = req.headers["Authorization"]

    if(!token) return res.status(403).send({message: "forbidden"});

    verify(token, config.secret, (err, decode) => {
        if(err) return res.status(401).send({message: "forbidden access"});

        req.userId = decode.Id;
    })
    const jwtAuth = {verifyToken}
}

module.exports = jwtAuth
