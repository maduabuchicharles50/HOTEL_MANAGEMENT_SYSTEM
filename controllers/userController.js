const userprofile = require("../models/user")


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userProfile = require("../models/user");

const { SECRET = "secret" } = process.env;

class UserProfileController {

    // register user
    async register(req, res) {

        req.body.password = await bcrypt.hash(req.body.password, 8);

        const user = await userprofile.create(req.body)
        return res.status(201).send({
        success: true,
        message: "User created",
        data: user,
        })
    }

    // login user
    async login(req, res) {
        try {
            const user = await userProfile.findOne({ username: req.body.username });
            if (user) {

              const result = await bcrypt.compare(req.body.password, user.password);
              if (result) {

                const token = await jwt.sign({ username: user.username }, SECRET);
                return res.json({ token });

              } else {
                return res.status(400).json({ error: "password doesn't match" });
              }
            } else {
              return res.status(400).json({ error: "User doesn't exist" });
            }
          } catch (error) {

            return res.status(400).json({ error });

        }
    }
}

module.exports = new UserProfileController();