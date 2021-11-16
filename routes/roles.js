var express = require('express');
var router = express.Router();
const controller = require('../controllers/index');


// create a new record 
router.post('/', controller.roles.rolesController.create);

//get all records
router.get('/', controller.roles.rolesController.getAll);

//get one record by id
router.get('/:id', controller.roles.rolesController.getbyId)

//update a user record
router.put('/:id', controller.roles.rolesController.update)

//delete a user record
router.delete('/:id', controller.roles.rolesController.delete)


module.exports = router;