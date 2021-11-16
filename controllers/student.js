const db = require('../model/index');
const students = db.students;
const {constants} = require('./constants');

exports.studentsController = {
    create: (req, res) => {
        const student = req.body;
        students.create(student).then((data) => {
                                res.status(200)
                                    .send(data);
                        }).catch((err) => {
                                constants.handleError(err, res)
                        })
    },
    getAll: (req, res) => {
        students.findAll().then((data) => {
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
        students.findOne({
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
        const student = req.body;
        students.update(student, {
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
        students.destroy({
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