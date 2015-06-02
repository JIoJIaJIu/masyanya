module.exports = function (sequelize, DataTypes) {
    return sequelize.define('address', {
        city: DataTypes.STRING,
        street: DataTypes.STRING,
        house: DataTypes.INTEGER, //TODO
        entrance: DataTypes.INTEGER.UNSIGNED,
        flat: DataTypes.INTEGER.UNSIGNED,
        intercome: DataTypes.STRING,
        phone: DataTypes.STRING
    });
}
