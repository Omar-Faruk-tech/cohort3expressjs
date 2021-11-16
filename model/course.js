module.exports  = (sequelize, dataType) => {

    const course = sequelize.define('courses', {
        english: {
            type: dataType.STRING
        },
        mathematics: {
            type: dataType.STRING
        },
        computer: {
            type: dataType.STRING
        }
    })
    return course
}