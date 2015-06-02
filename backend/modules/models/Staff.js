module.exports = function (sequelize, DataTypes) {
    return sequelize.define('staff', {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        patronicName: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        post: DataTypes.STRING,
        center: {
            type: DataTypes.INTEGER,
            references: {
                model: sequelize.models.center,
            }
        }
    });
}
