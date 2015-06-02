module.exports = function (sequelize, DataTypes) {
    return sequelize.define('center', {
        maxPlaces: DataTypes.INTEGER.UNSIGNED,
        freePlaces: DataTypes.INTEGER.UNSIGNED,
        address: {
            type: DataTypes.INTEGER,
            unique: true,
            references: {
                model: sequelize.models.address,
                key: 'id'
            }
        },
        rental: DataTypes.FLOAT.UNSIGNED,
    });
}
