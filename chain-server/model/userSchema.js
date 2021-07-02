const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    cemail: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// we are hashing the password here

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const User = mongoose.model("USER", userSchema);

module.exports = User;
