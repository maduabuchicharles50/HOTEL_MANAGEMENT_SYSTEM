require("dotenv").config();
const jwt = require("jsonwebtoken");

// Middlewares for authorization
const isLoggedIn = async (req, res, next) => {
  try {
    // checking the auth header
    if (req.headers.authorization) {
      // parse header
       //split the header and take the payload
      const token = req.headers.authorization.split(" ")[1];
      if (token) {
        const payload = await jwt.verify(token, process.env.SECRET);
        if (payload) {
          // store user data
          req.user = payload;
          next();
        } else {
          return res.status(400).json({ error: "Token verification failed" });
        }
      } else {
        return res.status(400).json({ error: "Incorrect auth header" });
      }
    } else {
      return res.status(400).json({ error: "Access denied" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};



module.exports = isLoggedIn;