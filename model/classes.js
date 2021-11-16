module.exports = (sequelize, dataType) => {
    const classes = sequelize.define('classes', {
        name:{
            type: dataType.STRING
        },
        department: {
            type: dataType.STRING
        }
    })
    return classes;
}