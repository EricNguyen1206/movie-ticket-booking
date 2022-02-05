"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema_room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cinema_room.belongsTo(Room, {
        foreignKey: "room_name",
        targetKey: "name",
        as: "roomNameData",
      });

      Cinema_room.belongsTo(Cinema, {
        foreignKey: "cinemaId",
        targetKey: "cinemaId",
        as: "cinemaData",
      });
    }
  }
  Cinema_room.init(
    {
      cinemaId: DataTypes.INTEGER,
      room_name: DataTypes.STRING(10),
    },
    {
      sequelize,
      modelName: "Cinema_room",
    }
  );
  return Cinema_room;
};
