"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Passwordreset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Passwordreset.belongsTo(Account, {
        foreignKey: "email",
        targetKey: "email",
        as: "accountData",
      });
    }
  }
  Passwordreset.init(
    {
      email: DataTypes.STRING(40),
      verifyToken: DataTypes.STRING,
      expires: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Passwordreset",
    }
  );
  return Passwordreset;
};
