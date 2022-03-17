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
      // Account.belongsTo(models.Allcode, {
      //   foreignKey: "roleId",
      //   targetKey: "keyMap",
      //   as: "roleData",
      // });

      Account.belongsTo(models.Role, {
        foreignKey: "roleId",
        targetKey: "roleId",
        as: "roleData",
      });

      Account.hasOne(models.User, { foreignKey: "email", as: "userData" });
      Account.hasOne(models.Admin, { foreignKey: "email", as: "adminData" });
      Account.hasMany(models.Passwordreset, {
        foreignKey: "email",
        as: "userPwData",
      });
    }
  }
  Account.init(
    {
      email: { type: DataTypes.STRING(40), primaryKey: true },
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
