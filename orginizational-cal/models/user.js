const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
	name: { type: String, required: true },
	google: {
		id: String,
		token: String,
		email: String,
		name: String
	}, 
	facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String,
        twits: String
    },
    linkedin: {
        id: String,
        token: String,
        displayName: String,
        profile: String,
        public_page: String
    },
    meetupEvents: {type: Array},
    googleEvents: {type: Array},
    location: {type: String},
    places: {type: String},
	date: { type: Date, default: Date.now }
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
