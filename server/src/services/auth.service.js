const db = require("../models");

const { transErrorsVi, transSuccessVi, transMailVi } = require("../../lang/vi");
const { ROLE } = require("../helpers/constants");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const emailService = require("./email.service");

let salt = bcrypt.genSaltSync(10);

let checkEmailIsExist = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let account = await db.Account.findOne({ where: { email: email } });
      if (account) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (err) {
      reject(err);
    }
  });
};

let signUp = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let emailIsExist = await checkEmailIsExist(data.email);
      if (emailIsExist) {
        return resolve({
          success: false,
          message: transErrorsVi.email_is_exist,
        });
      } else {
        let accountItem = {
          email: data.email,
          password: bcrypt.hashSync(data.password, salt),
          isActive: false,
          roleId: ROLE.USER,
          verifyToken: uuidv4(),
        };
        let userItem = {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          avatar: "avatar-default.jpg",
          gender: data.gender,
          birthday: data.birthday,
        };

        let newAccount = await db.Account.create(accountItem);

        let newUser = await db.User.create(userItem);

        let APP_CLIENT_URL = process.env.APP_CLIENT_URL;
        let linkVerify = `${APP_CLIENT_URL}/verify-account?token=${accountItem.verifyToken}&email=${accountItem.email}`;
        emailService
          .sendMail(
            data.email,
            transMailVi.subject,
            transMailVi.template(linkVerify)
          )
          .then((success) => {
            resolve({
              success: true,
              message: transSuccessVi.userCreated(newAccount.email),
              newUser,
              newAccount,
            });
          })
          .catch(async (err) => {
            console.log("err sign up", err);
            await db.Account.destroy({
              where: {
                email: data.email,
              },
            });
            await db.User.destroy({ where: { email: data.email } });
            reject({
              success: false,
              error: err,
              message: transErrorsVi.sever_error,
            });
          });

        resolve({
          success: true,
          message: transSuccessVi.userCreated(newAccount.email),
          newUser,
          newAccount,
        });
      }
    } catch (err) {
      console.log("err", err);
      reject({
        success: false,
        error: err,
        message: transErrorsVi.sever_error,
      });
    }
  });
};

let verifyToken = (token, email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let account = await db.Account.findOne({
        where: { email: email, verifyToken: token },
      });
      if (account) {
        await account.update(
          { isActive: true, verifyToken: null },
          { where: { email: email, verifyToken: token } }
        );
      } else {
        return resolve({
          success: false,
          message: transErrorsVi.token_undefined,
        });
      }

      resolve({ success: true, message: transSuccessVi.account_actived });
    } catch (err) {
      console.log("err", err);
      reject({
        success: false,
        message: transErrorsVi.server_error,
      });
    }
  });
};

module.exports = {
  signUp,
  verifyToken,
};
