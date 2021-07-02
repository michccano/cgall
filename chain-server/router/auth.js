const express = require("express");
const router = express();

require("../db/db_con");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send(`hello world from the server router`);
});

// registion here

router.post("/register", async (req, res) => {
    const { name, fullName, email, cemail, password } = req.body;

    if (!name || !fullName || !email || !cemail || !password) {
        return res.status(422).json({ error: "please fill the field " });
    }

    try {
        const usernameExist = await User.findOne({ name: name });
        if (usernameExist) {
            return res.status(422).json({ error: "username already Exist " });
        }

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist " });
        }

        const user = new User({ name, fullName, email, cemail, password });
        // password hashing

        const userRegister = await user.save();

        if (userRegister) {
            res.status(201).json({ message: "user registered " });
        } else {
            res.status(500).json({ error: "Failed register" });
        }
    } catch (err) {
        console.log(err);
    }
});

//login here
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" });
        }

        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);
        if (!userLogin) {
            res.status(400).json({ error: "user error" });
        } else {
            res.json({ message: "login successful" });
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
