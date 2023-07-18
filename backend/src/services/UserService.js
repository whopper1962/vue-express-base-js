const User = require("../models/user");

module.exports = class UsersService {
  async fetchAll() {
    const fetchedUsers = await User.findAll();

    return fetchedUsers;
  }
};
