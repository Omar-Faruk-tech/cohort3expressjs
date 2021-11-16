module.exports = (sequelize, dataType) => {
    const student = sequelize.define('student', {
        highestQualification: {
            type: dataType.STRING
        },
        name: {
            type: dataType.STRING
        }
    });
    return student;
}