const router = require("express").Router();
var apiCont = require('../controllers/apicont.js');
module.exports = function(app) {
	app.get('/test', apiCont.test);
	app.get('/api/meetups/:id', apiCont.getMeetupEvents);
	app.get('/api/getTwits/:id', apiCont.getTwits);
	app.get('/api/getLink/:id', apiCont.getLink);
	app.get('/api/getNLU/:id', apiCont.runNLU);
	app.get('/api/fullSearch', apiCont.getFullSearch);
	app.get("/api/meetups/:id", apiCont.getMeetupEvents);
	app.post("/api/watRes/:id", apiCont.postNLU);
	app.get('/api/weather', apiCont.weather);
  	// app.post("/api/meetups/:id", apiCont.getMeetupEvents);
	
};