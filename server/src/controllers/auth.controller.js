const authService = require("../services/auth.service");
const { transErrorsVi } = require("../../lang/vi");

let signUp = async (req, res) => {
  try {
    let { firstName, lastName, email, password, gender, birthday } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !gender ||
      !birthday
    ) {
      return res.json({
        success: false,
        message: "Missing required parameters",
      });
    }

    let response = await authService.signUp(req.body);

    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ success: false, message: null, error: err });
  }
};

let signIn = async (req, res) => {};

let verifyToken = async (req, res) => {
  try {
    let { token, email } = req.body;
    if (!email) {
      return res
        .status(200)
        .json({ success: false, message: transErrorsVi.email_not_found });
    }

    if (!token) {
      return res
        .status(200)
        .json({ success: false, message: transErrorsVi.token_undefined });
    }
    let response = await authService.verifyToken(token, email);

    return res.status(200).json(response);
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({
      success: false,
      message: transErrorsVi.server_error,
    });
  }
};

module.exports = {
  signUp,
  verifyToken,
  signIn,
};
