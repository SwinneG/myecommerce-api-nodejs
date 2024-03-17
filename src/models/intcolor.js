module.exports = (sequelize, DataTypes) => {
    const IntColor =  sequelize.define('IntColor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: { msg: 'Name cannot be empty' },
                notNull: { msg: 'Name is a required property' }
            }
        },
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        tableName: 'intcolors'
    })

    return IntColor
  }