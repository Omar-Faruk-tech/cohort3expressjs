const usersController = require('./users');
const rolesController = require('./roles');
const studentsController = require('./student');
const authController = require('./auth');


const controller = {};
controller.users = usersController;
controller.roles = rolesController;
controller.students = studentsController;
controller.auth = authController;

module.exports = controller;