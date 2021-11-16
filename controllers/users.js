const { request } = require('../app');
const db = require('../model/index');
const users = db.users;
const {constants} = require('./constants')

exports.usersController = {
    create: (req, res) => {
        const user = req.body;
        users.create(user).then((data) => {
                                res.status(200)
                                    .send(data);
                        }).catch((err) => {
                                constants.handleError(err, res)
                        })
    },
    getAll: (req, res) => {
        users.findAll().then((data) => {
                            res.status(200)
                                .send(data);
                    }).catch((err) => {
                            res.status(400)
                                .send({
                                    message: err.message || 'could not fetch record'
                                });
                    })
    },
    getbyId: (req, res) => {
        users.findOne({
            where: {id: req.params.id}
        }).then((data) => {
            if(data == undefined) {
                res.status(404).send({message:"record not found"})
            }
            res.status(200)
                .send(data)
        }).catch((err) => {
            res.status(400)
                .send({
                    message: err.message || 'could not fetch record'
                });
        })
    },
    update: (req, res) => {
        const user = req.body;
        users.update(user, {
            where: {
                id: req.params.id
            }
        }).then((data) => {
            if(data[0] !== 1){
                res.status(200)
                    .send({
                        message: "record not found"
                    })
            }
            res.status(200)
                .send({
                    message: "record updated"
                })
        }).catch((err) => {
            constants.handleError(err, res)
        })
    },
    delete: (req, res) => {
        users.destroy({
            where:{
                id: req.params.id
            }
        }).then((data) => {
            if(data !== 1){
                res.status(404)
                    .send({
                        message: "record not found"
                    })
            }
            res.status(200)
                .send({
                    message: "record deleted"
                })
        }).catch((err) => {
            res.status(400)
                .send({
                    message: "could not fetch record"
                })
                console.log(err);
        })
    }
}