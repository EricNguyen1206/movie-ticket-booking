const jwtHepler = require("../helpers/jwt");

let isAuthenticated = async (req, res, next) => {
  try {
    let token = req.headers["access-token"];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Access token missing" });
    }

    let check = await jwtHepler.verifyToken(token);
    if (!check.success) {
      return res.json(check);
    }

    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { isAuthenticated };
