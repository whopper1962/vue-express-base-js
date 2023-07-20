const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = class AuthService {
  async login(body) {
    const { email, password } = body;
    const loggedInUser = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (!loggedInUser) throw new Error("Authorization failed!");

    try {
      const token = jwt.sign(
        { userId: loggedInUser.id, email: loggedInUser.email },
        "SECRET_KEY",
        { expiresIn: "2000" } // 10minutes
      );
      return token;
    } catch {
      throw new Error("Token generation failed!");
    }
  }

  async signUp() {}
};
