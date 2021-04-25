const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const CVSchema = mongoose.Schema({
	name: {type: String, required: true},
    surname: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true}, 
    age: {type: String, required: true},
    city: {type: String, required: true},
    position: {type: String, required: true},
    salary: {type: String, required: true},
    occupation: {type: String, required: true},
    education: {type: String, required: true},
    educationPlace: {type: String, required: true},
    faculty: {type: String, required: true},
    speciality: {type: String, required: true},
    aboutYou: {type: String, required: true}
});

const CV = module.exports = mongoose.model('CV', CVSchema);

module.exports.addCV = function(newCV, callback) {
	newCV.save(callback);
};
