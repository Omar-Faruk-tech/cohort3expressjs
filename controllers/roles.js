// const { request } = require('../app');
const db = require('../model/index');
const roles = db.roles;
const {constants} = require('./constants')

exports.rolesController = {
    create: (req, res) => {
        const role = req.body;
        roles.create(role).then((data) => {
                                res.status(200)
                                    .send(data);
                        }).catch((err) => {
                            console.log(err)
                                // constants.handleError(err, res)
                        })
    },
    getAll: (req, res) => {
        roles.findAll().then((data) => {
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
        roles.findOne({
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
        const role = req.body;
        roles.update(role, {
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
            // constants.handleError(err, res)
            console.log(err)
        })
    },
    delete: (req, res) => {
        roles.destroy({
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