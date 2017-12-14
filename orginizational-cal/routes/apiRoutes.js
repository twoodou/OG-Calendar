var apiCont = require('../controllers/apicont.js');

var fields = "tech";
var key = "2177251a265c5d6d69c4b171f4e32";
var long = "-96.1581974";
var lat = "36.1524972";

module.exports = function(app) {
  app.get('/test', apiCont.test);

  app.get("/api/meetups/:id", apiCont.getMeetupEvents);
};
