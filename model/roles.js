
module.exports = (sequelize, dataType) => {
    const role = sequelize.define('role', {
       name:{
           type: dataType.STRING,
           allowNull: false
       },
       description:{
           type: dataType.STRING,
           allowNull: false
       }
       
    });
    return role
}