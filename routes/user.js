const router = require('express').Router();
const User = require('../models/user');

router.get('/user', async (req, res) => {
	const allUsers = User.find();
	if (allUsers) {
		res.status(200).json({ data: allUsers });
	}
});
router.post('/insertUser', async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPassword
	});
	try {
		const savedUser = await user.save();
		console.log('Register');
		res.send({
			message: 'Registration Sucessfully',
			savedUser
		});
	} catch (err) {
		res.status(400).send(err);
	}
});

//Export
module.exports = router;
