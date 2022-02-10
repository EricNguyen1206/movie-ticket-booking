"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.belongsTo(models.Account, {
        foreignKey: "email",
        targetKey: "email",
        as: "adminData",
      });
    }
  }
  Admin.init(
    {
      email: { type: DataTypes.STRING(40), primaryKey: true },
      firstName: DataTypes.STRING(15),
      lastName: DataTypes.STRING(30),
      avatar: DataTypes.BLOB("long"),
      birthday: DataTypes.DATE,
      gender: DataTypes.STRING(10),
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
