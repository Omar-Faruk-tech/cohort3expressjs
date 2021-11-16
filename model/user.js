module.exports = (sequelize, dataType) => {
    const user = sequelize.define('user', {
        firstName: {type: dataType.STRING,
                    allowNull: false},
        lastName: {type: dataType.STRING,
                    allowNull: false},
        email: {type: dataType.STRING,
                    allowNull: false},
        userName: {type: dataType.STRING,
                    allowNull: false,
                    validate:{
                        len:{args:[6,10],
                        msg: "username must be of min 6 and max 10 char"}
                    }},
        password: {type: dataType.STRING,
                    allowNull: false}
    });
    return user
}

