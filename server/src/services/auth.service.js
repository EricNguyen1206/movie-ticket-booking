const db = require("../models");
// const Account = require("../models/account");
const { Model } = require("sequelize");

const { transErrorVi } = require("../../lang/vi");

let signUp = async (data) => {
  // find Email
  // create account
  // send link verify

  return new Promise(async (resolve, reject) => {
    try {
      // Create new account
      const newAccount = await db.Account.create({
        email: data.email,
        password: "123",
        roleId: "R2",
        isActive: false,
        verifyToken: "abcde",
      });

      return resolve({
        success: true,
        error: null,
        message: "Account has been created",
      });
    } catch (err) {
      console.log("err", err);
      reject({
        success: false,
        error: err,
        message: transErrorVi.sever_error,
      });
    }
  });
};

module.exports = {
  signUp,
};
