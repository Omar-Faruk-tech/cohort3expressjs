const Sequelize = require('Sequelize');
const sequelize = new Sequelize('cohort3', 'faruk', 'Omar@123', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 5000,
    idle: 1000
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('DB CONNECTED')

  })
  .catch(err => {
    console.log('could not establish connection', err)
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.users = require('./user') (sequelize, Sequelize);
  db.courses = require('./course') (sequelize, Sequelize);
  db.roles = require('./roles') (sequelize, Sequelize);
  db.classes = require('./classes') (sequelize, Sequelize);
  db.students = require('./student') (sequelize, Sequelize);


//one to one relationship
  db.roles.hasOne(db.users);
// //foreign key (source belongsTo target)
  db.users.belongsTo(db.roles);


//one to one
  db.users.hasOne(db.students);
  db.students.belongsTo(db.users);

//One to many
  db.students.hasMany(db.classes);
  db.classes.belongsTo(db.students);


//many to many
  db.roles.belongsToMany(db.users, {through: 'userRole'});
  db.users.belongsToMany(db.roles, {through: 'userRole'});

  module.exports = db