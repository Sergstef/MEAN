const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Company = require('../models/company');
const CV = require('../models/CV');
const Vacancy = require('../models/vacancy');
const Article = require('../models/article');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

/*router.get('/reg', (req, res) => {
	res.send('Страница регистрации!');
})*/

router.post('/reg', (req, res) => {
	let newUser = new User({
		name: req.body.name,
		surname: req.body.surname,
		phoneNumber: req.body.phoneNumber,
		email: req.body.email,
		password: req.body.password,
		cvs: []
	});

	User.addUser(newUser, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Пользователь не был добавлен"});
		} 
		else
			res.json({success: true, msg: "Пользователь был добавлен"});
	});
});

router.post('/regCompany', (req, res) => {
	let newCompany = new Company({
		name: req.body.name,
		adress: req.body.adress,
		phoneNumber: req.body.phoneNumber,
		email: req.body.email,
		password: req.body.password,
		description: req.body.description
	});

	Company.addCompany(newCompany, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Компания не была добавлен"});
		} 
		else
			res.json({success: true, msg: "Компания была добавлен"});
	});
});

router.post('/addCV', (req, res) => {
	let newCV = new CV({
		name: req.body.CV.name,
		surname: req.body.CV.surname,
		email: req.body.CV.email,
		phoneNumber: req.body.CV.phoneNumber,
		age: req.body.CV.age,
		city: req.body.CV.city,
		position: req.body.CV.position,
		salary: req.body.CV.salary,
		occupation: req.body.CV.occupation,
		education: req.body.CV.education,
		educationPlace: req.body.CV.educationPlace,
		faculty: req.body.CV.faculty,
		speciality: req.body.CV.speciality,
		aboutYou: req.body.CV.aboutYou
	});

	let newUser = new User({
		name: req.body.user.name,
		surname: req.body.user.surname,
		phoneNumber: req.body.user.phoneNumber,
		email: req.body.user.email
	});

	User.addCVToUser(newUser.email, newCV, (err, result) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Резюме не было добавлен пользователю"});
		} 
		else {
			const id = result.cvs[result.cvs.length - 1]._id;
			res.json({success: true, msg: "Резюме было добавлен пользователю", _id: id});
		}
	});
});

router.post('/addVacancy', (req, res) => {
	let newVacancy = new Vacancy({
		name: req.body.vacancy.name,
		email: req.body.vacancy.email,
		city: req.body.vacancy.city,
		position: req.body.vacancy.position,
		salary: req.body.vacancy.salary,
		occupation: req.body.vacancy.occupation,
		experience: req.body.vacancy.experience,
		responsibility: req.body.vacancy.responsibility,
		requirements: req.body.vacancy.requirements,
		conditions: req.body.vacancy.conditions,
		aboutYou: req.body.vacancy.aboutYou
	});

	let newCompany = new Company({
		name: req.body.company.name,
		adress: req.body.company.adress,
		phoneNumber: req.body.company.phoneNumber,
		email: req.body.company.email
	});

	Company.addVacancyToCompany(newCompany.email, newVacancy, (err, result) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Вакансия не было добавлен пользователю"});
		} 
		else {
			const id = result.vacancies[result.vacancies.length - 1]._id;
			res.json({success: true, msg: "Вакансия было добавлен пользователю", _id: id});
		}
	});
});

router.post('/addArticle', (req, res) => {
	let newArticle = new Article({
		heading: req.body.article.heading,
		companyName: req.body.article.companyName,
		articleText: req.body.article.articleText
	});

	let newCompany = new Company({
		name: req.body.company.name,
		adress: req.body.company.adress,
		phoneNumber: req.body.company.phoneNumber,
		email: req.body.company.email
	});

	Company.addArticleToCompany(newCompany.email, newArticle, (err, result) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Статья не была добавлена пользователю"});
		} 
		else{
			const id = result.articles[result.articles.length - 1]._id;
			res.json({success: true, msg: "Статья была добавлена пользователю", _id: id});
		}
	});
});

router.post('/deleteVac', (req, res) => {
	let newVacancy = new Vacancy({
		_id: req.body.vacancy._id
	});

	let newCompany = new Company({
		name: req.body.company.name,
		adress: req.body.company.adress,
		phoneNumber: req.body.company.phoneNumber,
		email: req.body.company.email
	});

	Company.deleteVacancyFromCompany(newCompany.email, newVacancy._id, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Вакансия не была удалена из компании"});
		} 
		else
			res.json({success: true, msg: "Вакансия была удалена из компании"});
	});
});

router.post('/deleteArticle', (req, res) => {
	let newArticle = new Article({
		_id: req.body.article._id
	});

	let newCompany = new Company({
		name: req.body.company.name,
		adress: req.body.company.adress,
		phoneNumber: req.body.company.phoneNumber,
		email: req.body.company.email
	});

	Company.deleteArticleFromCompany(newCompany.email, newArticle._id, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Статья не была удалена из компании"});
		} 
		else
			res.json({success: true, msg: "Статья была удалена из компании"});
	});
});

router.post('/deleteCV', (req, res) => {
	let newCV = new CV({
		_id: req.body.cv._id
	});

	let newUser = new User({
		name: req.body.user.name,
		surname: req.body.user.surname,
		phoneNumber: req.body.user.phoneNumber,
		email: req.body.user.email
	});

	User.deleteCVFromUser(newUser.email, newCV._id, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Резюме не было удалено из пользователя"});
		} 
		else
			res.json({success: true, msg: "Резюме было удалено из пользователя"});
	});
});

router.post('/deleteVacFromDatabase', (req, res) => {
	let newVacancy = new Vacancy({
		_id: req.body.vacancy._id
	});
	Vacancy.deleteVacancy(newVacancy._id, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Вакансия не была удалена"});
		} 
		else
			res.json({success: true, msg: "Вакансия была удалена"});
	});
});

router.post('/deleteArticleFromDatabase', (req, res) => {
	let newArticle = new Article({
		_id: req.body.article._id
	});
	Article.deleteArticle(newArticle._id, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Статья не была удалена"});
		} 
		else
			res.json({success: true, msg: "Статья была удалена"});
	});
});

router.post('/deleteCVFromDatabase', (req, res) => {
	console.log(req.body.cv._id);
	let newCV = new CV({
		_id: req.body.cv._id
	});
	CV.deleteCV(newCV._id, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Резюме не было удалено"});
		} 
		else
			res.json({success: true, msg: "Резюме было удалено"});
	});
});

router.post('/regCV', (req, res) => {
	let newCV = new CV({
		_id: req.body.id,
		name: req.body.CV.name,
		surname: req.body.CV.surname,
		email: req.body.CV.email,
		phoneNumber: req.body.CV.phoneNumber,
		age: req.body.CV.age,
		city: req.body.CV.city,
		position: req.body.CV.position,
		salary: req.body.CV.salary,
		occupation: req.body.CV.occupation,
		education: req.body.CV.education,
		educationPlace: req.body.CV.educationPlace,
		faculty: req.body.CV.faculty,
		speciality: req.body.CV.speciality,
		aboutYou: req.body.CV.aboutYou
	});

	CV.addCV(newCV, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Резюме не было добавлен"});
		} 
		else
			res.json({success: true, msg: "Резюме было добавлен"});
	});
});

router.post('/regVacancy', (req, res) => {
	let newVacancy = new Vacancy({
		_id: req.body.id,
		name: req.body.vacancy.name,
		email: req.body.vacancy.email,
		city: req.body.vacancy.city,
		position: req.body.vacancy.position,
		salary: req.body.vacancy.salary,
		occupation: req.body.vacancy.occupation,
		experience: req.body.vacancy.experience,
		responsibility: req.body.vacancy.responsibility,
		requirements: req.body.vacancy.requirements,
		conditions: req.body.vacancy.conditions,
		aboutYou: req.body.vacancy.aboutYou
	});

	Vacancy.addVacancy(newVacancy, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Вакансия не было добавлен"});
		} 
		else
			res.json({success: true, msg: "Вакансия было добавлен"});
	});
});

router.post('/regArticle', (req, res) => {
	let newArticle = new Article({
		_id: req.body.id,
		heading: req.body.article.heading,
		companyName: req.body.article.companyName,
		articleText: req.body.article.articleText
	});

	Article.addArticle(newArticle, (err, user) => {
		if(err){
			throw err;
			res.json({success: false, msg: "Статья не была добавлена"});
		} 
		else
			res.json({success: true, msg: "Статья была добавлена"});
	});
});

router.post('/auth', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	User.getUserByEmail(email, (err, user) => {
		if(err) throw err;
		if(!user)
			return res.json({success: false, msg: "Такой пользователь был не найден"});
		User.comparePass(password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch) {
				const token = jwt.sign(user.toJSON(), config.secret, {
					expiresIn: 3600 * 24 
				});

				res.json({success: true, token: 'JWT' + token, user: {
					name: user.name,
					surname: user.surname,
					phoneNumber: user.phoneNumber,
					email: user.email,
					cvs: user.cvs
				}}); 
			} else {
				return res.json({success: false, msg: "Пароли не совпадают"}); 
			}
		});
	})
});

router.get('/getVacancies', (req, res) => {
	Vacancy.getVacancies((err, vacancies) => {
		if(err) {
			console.log("Ошибка");
		} else {
			res.json(vacancies);
		}
	})
});

router.get('/getArticles', (req, res) => {
	Article.getArticles((err, articles) => {
		if(err) {
			console.log("Ошибка");
		} else {
			res.json(articles);
		}
	})
});

router.get('/getCompanies', (req, res) => {
	Company.getCompanies((err, companies) => {
		if(err) {
			console.log("Ошибка");
		} else {
			res.json(companies);
		}
	})
});

router.get('/getCVs', (req, res) => {
	CV.getCVs((err, cvs) => {
		if(err) {
			console.log("Ошибка");
		} else {
			res.json(cvs);
		}
	})
});

router.post('/updateUser', (req, res) => {
	const email = req.body.email;
	User.getUserByEmail(email, (err, user) => {
				const token = jwt.sign(user.toJSON(), config.secret, {
					expiresIn: 3600 * 24 
				});

				res.json({success: true, token: 'JWT' + token, user: {
					name: user.name,
					surname: user.surname,
					phoneNumber: user.phoneNumber,
					email: user.email,
					cvs: user.cvs
				}});
		});
});

router.post('/updateCompany', (req, res) => {
	const email = req.body.email;
	Company.getCompanyByEmail(email, (err, company) => {
				const token = jwt.sign(company.toJSON(), config.secret, {
					expiresIn: 3600 * 24 
				});

				res.json({success: true, token: 'JWT' + token, company: {
					name: company.name,
					adress: company.adress,
					phoneNumber: company.phoneNumber,
					email: company.email,
					vacancies: company.vacancies,
					description: company.description,
					articles: company.articles
				}});
		});
});

router.post('/authCompany', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	Company.getCompanyByEmail(email, (err, company) => {
		if(err) throw err;
		if(!company)
			return res.json({success: false, msg: "Такая компания не была найдена"});
		Company.comparePass(password, company.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch) {
				const token = jwt.sign(company.toJSON(), config.secret, {
					expiresIn: 3600 * 24 
				});

				res.json({success: true, token: 'JWT' + token, company: {
					name: company.name,
					adress: company.adress,
					phoneNumber: company.phoneNumber,
					email: company.email,
					vacancies: company.vacancies,
					description: company.description,
					articles: company.articles
				}}); 
			} else {
				return res.json({success: false, msg: "Пароли не совпадают"}); 
			}
		});
	})
});


router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req, res) => {
	res.send('Страница пользователя!');
});

router.get('/companyDashboard', passport.authenticate('jwt', {session: false}), (req, res) => {
	res.send('Страница компании!');
});

module.exports = router;