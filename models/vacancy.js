const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const VacancySchema = mongoose.Schema({
	name: {type: String, required: true},
    email: {type: String, required: true}, 
    city: {type: String, required: true},
    position: {type: String, required: true},
    salary: {type: String, required: true},
    occupation: {type: String, required: true},
    experience: {type: String, required: true},
    responsibility: {type: String, required: true},
    requirements: {type: String, required: true},
    conditions: {type: String, required: true},
    aboutYou: {type: String, required: true}
});

const Vacancy = module.exports = mongoose.model('Vacancy', VacancySchema);

module.exports.addVacancy = function(newVacancy, callback) {
	newVacancy.save(callback);
};

module.exports.deleteVacancy = function(vacancyId, callback) {
    Vacancy.deleteOne({_id: vacancyId}).exec(callback);
};

module.exports.getVacancies = function(callback) {
    Vacancy.find().exec(callback);
}