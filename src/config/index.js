require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT,
  },
  db: {
    uri: process.env.MONGO_URI,
  },
  secrets: {
    jwtSecret: process.env.JWT_SECRET,
  },
};
