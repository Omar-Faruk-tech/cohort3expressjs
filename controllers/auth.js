const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/auth');
const db = require('../model/index');
const users = db.users;
const {constants} = require('./constants')

exports.authController = {
    signUp: (req, res) => {
        const user = req.body;
        user.password = bcrypt.hashSync(user.password, 10)
        users.create(user).then((data) => {
                                res.status(200)
                                    .send(data);
                        }).catch((err) => {
                                constants.handleError(err, res)
                        })
    },
    signIn: (req, res) => {
        users.findOne({where:{
            userName: req.body.userName
        }}).then((user) => {
                            if(!user) 
                            return res.status(401)
                                      .send({message: "invalid userName or Password"});

                        let isValidPassword = bcrypt.compareSync(req.body.password, user.password);


                            if(!isValidPassword) 
                            return res.status(401)
                                      .send({message: "invalid userName or Password"});

                    
                        let payload = {
                        id: user.id,
                        userName: user.userName};
                        let token = jwt.sign(payload, config.secret, {
                            expiresIn: 30000
                        })
                    res.status(200).send({
                        userData: payload,
                        accessToken: token
                    })
                    }).catch((err) => {
                            res.status(400)
                                .send({
                                    message: err.message || 'could not fetch record'
                                });
                    })
    },
    forgotPassword: (req, res) => {
        
    }
}