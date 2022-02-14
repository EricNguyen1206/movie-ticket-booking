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
      Passwordreset.belongsTo(models.Account, {
        foreignKey: "email",
        targetKey: "email",
        as: "userPwData",
      });
    }
  }
  Passwordreset.init(
    {
      email: { type: DataTypes.STRING(40), primaryKey: true },
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
