const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const UserSchema = mongoose.Schema({
	firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true}, 
    pwd: {type: String, required: true},
    confirmPwd: {type: String, required: true}
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByEmail = function(email, callback) {
	const query = {email: email};
	User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.pwd, salt, (err, hash) => {
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