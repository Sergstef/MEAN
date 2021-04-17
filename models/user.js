const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const UserSchema = mongoose.Schema({
	firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true}, 
    password: {type: String, required: true}
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByEmail = function(email, callback) {
	const query = {email: email};
	User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback) {
	console.log(newUser.password);
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	})
};


module.exports.comparePass = function(passFromUser, userDBPass, callback) {
	bcrypt.compare(passFromUser, userDBPass, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
};