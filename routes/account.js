const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

/*router.get('/reg', (req, res) => {
	res.send('Страница регистрации!');
})*/

router.post('/reg', (req, res) => {
	let newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		gender: req.body.gender,
		age: req.body.age,
		email: req.body.email,
		pwd: req.body.pwd,
		confirmPwd: req.body.confirmPwd
	});

	User.addUser(newUser, (err, user) => {
		if(err) 
			res.json({success: false, msg: "Пользователь не был добавлен"});
		else
			res.json({success: true, msg: "Пользователь был добавлен"});
	});
});

router.post('/auth', (req, res) => {
	const email = req.body.email;
	const password = req.body.pwd;
	User.getUserByEmail(email, (err, user) => {
		if(err) throw err;
		if(!user)
			return res.json({success: false, msg: "Такой пользователь был не найден"});
		User.comparePass(pwd, user.pwd, (err, isMatch) => {
			if(err) throw err;
			if(isMatch) {
				const token = jwt.sign(user, config.secret, {
					expiresIn: 3600 * 24 
				});

				res.json({success: true, token: 'JWT' + token, user: {
					firstName: user._firstName,
					email: user._email,	
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

module.exports = router;