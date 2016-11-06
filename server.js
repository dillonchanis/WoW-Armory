const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const bodyParser = require('body-parser');

const api = require('./api.config.js')();

app.use(express.static(path.resolve('wow-armory', '..', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('*', function(req, res) {
	res.sendFile(path.resolve('wow-armory', '..', 'build', 'index.html'));
});

app.post('/', function(req, res) {

	var url = `${api.baseURL}${req.body.realm}/${req.body.name}?fields=items,stats,talents&locale=en_US&apikey=${api.key}`;

	axios.get(url)
			 .then(function(response) {
			 		if(response.status === 200) {
			 			res.json(response.data);
			 		}
			 		else{
			 			res.json(response);
			 		}
			 })
			 .catch(function(error) {
			 		res.send(error.data);
			 });

});

app.post('/api/spell', function(req, res) {

	var url = `https://us.api.battle.net/wow/spell/${req.body.spellId}?locale=en_US&apikey=${api.key}`;

	axios.get(url)
			 .then(function(response) {
			 		res.json(response.data);
			 })
			 .catch(function(error) {
			 		res.send(error);
			 });
				 
});

app.listen(process.env.PORT || 9000, function() {
	console.log('Running...');
});