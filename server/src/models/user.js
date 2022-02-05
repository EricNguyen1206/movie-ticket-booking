"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(Account, {
        foreignKey: "email",
        targetKey: "email",
        as: "accountData",
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING(40),
      firstName: DataTypes.STRING(15),
      lastName: DataTypes.STRING(30),
      avatar: DataTypes.BLOB("long"),
      birthday: DataTypes.DATE,
      gender: DataTypes.STRING(10),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
