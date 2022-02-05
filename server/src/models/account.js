"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.belongsTo(Allcode, {
        foreignKey: "roleId",
        targetKey: "keyMap",
        as: "roleData",
      });

      Account.hasOne(User, { foreignKey: "email", as: "accountData" });
      Account.hasOne(Admin, { foreignKey: "email", as: "accountData" });
      Account.hasMany(Passwordreset, {
        foreignKey: "email",
        as: "accountData",
      });
    }
  }
  Account.init(
    {
      email: DataTypes.STRING(40),
      password: DataTypes.STRING,
      roleId: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      verifyToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Account",
    }
  );
  return Account;
};
