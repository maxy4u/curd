const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user');
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

mongoose.connect(
	'mongodb://localhost:27017/curdtest',
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	},
	() => console.log('connect to db')
);

app.use('/', user);

app.listen(3000, () => {
	console.log('server is listening at 3000 port');
});
