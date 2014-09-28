var express = require('express');
var app = express();
var path = require('path');
//resources (CSS,JS and images)
app.use('/static', express.static(__dirname + '/public'));
//view mapping 
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//routers

//Home page
app.get('/', function(req, res){
  //res.send('A paypal application');
  res.render('home', { title: 'Home page' }, function(err, html){
	  res.set('Content-Type', 'text/html');
	  res.send(new Buffer(html));
	});
  
});

//Send money
app.get('/sendmoney', function(req, res){
	  res.render('sendmoney', { title: 'Sending money' }, function(err, html){
		  res.set('Content-Type', 'text/html');
		  res.send(new Buffer(html));
		});
	  
	});
//Transfer 
app.get('/transfer', function(req, res){
	 res.json({status:"success"});
});
//Transaction history
app.get('/transactionhistory', function(req, res){
	  res.render('transactionhistory', { title: 'Transaction history' }, function(err, html){
		  res.set('Content-Type', 'text/html');
		  res.send(new Buffer(html));
		});
});

app.listen(3000);