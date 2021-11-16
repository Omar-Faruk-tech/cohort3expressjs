var express = require('express');
var router = express.Router();
const controller = require('../controllers/index');

let users = [{
  id    : 1,
  name  : "kenny"
}, 
{
  id    : 2,
  name  : "shams"
}
]
// console.log(controller)
// create a new record 
router.post('/', controller.users.usersController.create);

//get all records
router.get('/', controller.users.usersController.getAll);

//get one record by id
router.get('/:id', controller.users.usersController.getbyId);

//update a user record
router.put('/:id', controller.users.usersController.update);

//delete a user record
router.delete('/:id', controller.users.usersController.delete);



// router.get('/', function(req, res) {
//   // res.send('Tomiwa is a fine boy')
//   res.render('index', {name: 'Taiwo', title: 'Express js'})
// })

/* GET user by id. */
// router.get('/:id', function(req, res) {
//   const user = users.find(user => user.id == req.params.id) 
// },
// function (req, res) {
  // if (user === undefined) {
  //   res.status(404).send("Record not found")
  //   return
    // res
    // .status(200)
    // .send(user);
  // }
    // res.send('Hello world')
  // });

module.exports = router;
