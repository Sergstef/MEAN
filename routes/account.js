const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Company = require('../models/company');
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
		password: req.body.password
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
		password: req.body.password
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

router.post('/regCV', (req, res) => {
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
		email: req.body.user.email,
		password: req.body.user.password
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
					email: user.email
				}}); 
			} else {
				return res.json({success: false, msg: "Пароли не совпадают"}); 
			}
		});
	})
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
					email: company.email
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