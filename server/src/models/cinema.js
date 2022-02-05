"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cinema.hasMany(Cinema_room, {
        foreignKey: "cinemaId",
        as: "cinemaData",
      });
    }
  }
  Cinema.init(
    {
      cinemaId: DataTypes.INTEGER,
      name: DataTypes.STRING(30),
      location: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
