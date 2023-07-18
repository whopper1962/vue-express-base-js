const UsersService = require("../services/UserService");

module.exports = class UsersController {
  static async fetchAll(request, response, next) {
    try {
      const users = await new UsersService().fetchAll();
      response.json(users);
    } catch (error) {
      next(error);
    }
  }
};
