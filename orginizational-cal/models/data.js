const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const dataSchema = new Schema({
	name: {type: String},
	meetupEvents: {type: Array},
	googleEvents: {type: Array},
	location: {type: String},
	places: {type: String}
	// long: {type: String},
	// lat: {type: String}
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
