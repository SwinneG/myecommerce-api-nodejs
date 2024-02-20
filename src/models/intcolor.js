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
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false,
      tableName: 'intcolors'
    })

    IntColor.associate = function (models) {
        IntColor.hasMany(models.Car);
    }

    return IntColor
  }