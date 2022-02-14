"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.hasMany(models.Cinema_room, {
        foreignKey: "room_name",
        as: "roomNameData",
      });
    }
  }
  Room.init(
    {
      name: { type: DataTypes.STRING(10), primaryKey: true },
      numOfChair: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
