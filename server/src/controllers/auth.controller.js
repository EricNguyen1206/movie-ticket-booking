const authService = require("../services/auth.service");

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

module.exports = {
  signUp,
};
