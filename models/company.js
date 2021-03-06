const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const CompanySchema = mongoose.Schema({
	name: {type: String, required: true},
    adress: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true}, 
    password: {type: String, required: true},
    vacancies: {type: Array, required: true},
    description: {type: String, required: true},
    articles: {type: Array, required: true}
});

const Company = module.exports = mongoose.model('Company', CompanySchema);

module.exports.getCompanyByEmail = function(email, callback) {
	const query = {email: email};
	Company.findOne(query, callback);
};

module.exports.addVacancyToCompany = function(email, vacancy, callback) {
	const query = {email: email};
	Company.findOneAndUpdate(query,
	 {
	 	$push: {
	 		vacancies: vacancy
	 	}
	 }, 
	 {                              
        new: true
     }, callback)
};

module.exports.deleteVacancyFromCompany = function(email, vacancyId, callback) {
	const query = {email: email};
	Company.update(query,
	 {
	 	$pull: {
	 		vacancies: {_id: vacancyId}
	 	}
	 }, callback)
};

module.exports.deleteArticleFromCompany = function(email, articleId, callback) {
	const query = {email: email};
	Company.update(query,
	 {
	 	$pull: {
	 		articles: {_id: articleId}
	 	}
	 }, callback)
};

module.exports.addArticleToCompany = function(email, article, callback) {
	const query = {email: email};
	Company.findOneAndUpdate(query,
	 {
	 	$push: {
	 		articles: article
	 	}
	 },
	 {                              
        new: true
     }, callback)
};

module.exports.addCompany = function(newCompany, callback) {
	console.log(newCompany.password);
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newCompany.password, salt, (err, hash) => {
			if(err){
				throw err;
			}
			newCompany.password = hash;
			newCompany.save(callback);
		});
	})
};


module.exports.comparePass = function(passFromUser, userDBPass, callback) {
	bcrypt.compare(passFromUser, userDBPass, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
};

module.exports.getCompanies = function(callback) {
	let mySort = { name: 1 };
    Company.find().sort(mySort).exec(callback);
};