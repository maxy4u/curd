const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient ;
const app = express();
var db;

app.use(bodyParser.urlencoded({extended:true}));

MongoClient.connect('mongodb://localhost:27017/curdtest', (err, database) => {
	debugger;
  // ... start the server
  if (err) return console.log(err);
  db = database;
  	// make our db accessible via req
  	app.use((req,res,next)=>{
  		req.db = db ;
  		next();
  	})

	app.get('/',(req,res)=>{
		res.sendFile(`${__dirname}/index.html`);
	});
	app.post('/quotes', (req, res) => {
		req.db.collection('usercollection').save(req.body,(err,result)=>{
			if (err) return console.log(err);
			console.log('saved to database');
			res.redirect('/')
		})
	  	console.log(req.body);
	});
	app.listen(3000,function(){
		console.log('server is listening at 3000 port');
	});

});



