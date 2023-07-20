const AuthService = require("../services/AuthService");

module.exports = class AuthController {
  static async login(request, response, next) {
    try {
      const { body } = request;
      const authInfo = await new AuthService().login(body);
      response.json(authInfo);
    } catch (e) {
      next(e);
    }
  }

  static async signUp(request, response, next) {
    try {
      const { body } = request;
      const authInfo = await new AuthService().signUp(body);
      response.json(authInfo);
    } catch (e) {
      next(e);
    }
  }
};
