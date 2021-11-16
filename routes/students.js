var express = require('express');
var router = express.Router();
const controller = require('../controllers/index');


// create a new record 
// console.log(controller);
router.post('/', controller.students.studentsController.create);

//get all records
router.get('/', controller.students.studentsController.getAll);

//get one record by id
router.get('/:id', controller.students.studentsController.getbyId)

//update a user record
router.put('/:id', controller.students.studentsController.update)

//delete a user record
router.delete('/:id', controller.students.studentsController.delete)


module.exports = router;