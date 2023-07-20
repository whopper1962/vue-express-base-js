const jwt = require("jsonwebtoken");

module.exports = async function verifyAccessToken(request, response, next) {
  const token = request.headers.authorization.split(" ")[1];
  if (!token) response.status(401).send("Token must be provided!");

  try {
    const decodedToken = jwt.verify(token, "SECRET_KEY");
    console.log("=============AUTH TOKEN=============");
    console.debug(decodedToken);
    next();
  } catch {
    response.status(401).send("Authorization failed!");
  }
};
