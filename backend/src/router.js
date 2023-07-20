const { Router } = require("express");
const UsersController = require("./controllers/UsersController.js");
const AuthController = require("./controllers/AuthController.js");
const verifyAccessToken = require("./middlewares/verifyAccessToken.js");

const router = new Router();

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signUp);

router.get("/users", verifyAccessToken, UsersController.fetchAll);

module.exports = router;