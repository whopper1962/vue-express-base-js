module.exports = {
  port: process.env.APP_PORT || 3005,
  host: process.env.APP_HOST || "0.0.0.0",
  cors: {
    credentials: true,
    origin: process.env.VUE_APP_ORIGIN || "",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE", "HEAD","OPTIONS"],
    allowedHeaders: ["Content-Type"],
    preflightContinue: false,
    optionsSuccessStatus: 200,
  },
};
