const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    bio: String,
    profileImg: String
}, {
    timestamps : true
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// mongol / schema / create echema / User Model