"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Allcode.hasMany(models.Account, { foreignKey: "roleId", as: "roleData" });
    }
  }
  Allcode.init(
    {
      keyMap: { type: DataTypes.STRING(10), primaryKey: true },
      type: DataTypes.STRING(30),
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Allcode",
    }
  );
  return Allcode;
};
