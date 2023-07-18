const { Router } = require("express");
const UsersController = require("./controllers/UsersController.js");

const router = new Router();

router.get("/users", UsersController.fetchAll);

module.exports = router;