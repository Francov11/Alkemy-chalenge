module.exports = (sequelize ,DataTypes) => {
    return sequelize.define('characters', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        history: {
            type: DataTypes.STRING,
            allowNull: false
        },
        movies: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}


