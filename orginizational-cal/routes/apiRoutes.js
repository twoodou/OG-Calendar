var apiCont = require('../controllers/apicont.js');
module.exports = function(app) {
	app.get('/test', apiCont.test);
	app.get('/api/meetups/:id', apiCont.getMeetupEvents);
	app.get('api/getTwits', apiCont.getTwits);
	function runWatson(id, watsonInput) {
      var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

      var personality_insights = new PersonalityInsightsV3({
        username: "7ad6cee6-aab9-4f90-b17e-734d63050359",
        password: "tFUZRAZdCKJo",
        version_date: '2017-10-13'
      });

      personality_insights.profile({
          text: watsonInput,
          consumption_preferences: false,
          headers: {
            'content-type': 'text/html;charset=utf-8'
          }
        },
        function(err, response) {
          if (err)
            console.log('error:', err);
          else {
            // \/  Logs JSON response from Watson  \/
            // console.log(JSON.stringify(response, null, 2));
            // var personalityResults = JSON.stringify(response, null, 2);
            // console.log(personalityResults);
            console.log(response);


            var newResult = {
              results: response
            };

            // UPDATE database with results (JSONB) from Watson - - - - - - - -
            db.User.update(newResult, {
              where: {
                id: id
              }
            }).then(function() {
              db.User.findAll({
                // attributes: ['results'],
                where: {
                  id: req.params.id
                }

                // db findOne query callback
              }).then(function(userBig5) {
                function pushUserResults(userBig5) {
                  var newString = userBig5[0].dataValues.results.personality[0].percentile;

                  for (var i = 1; i < userBig5[0].dataValues.results.personality.length; i++) {
                    newString += "," + userBig5[0].dataValues.results.personality[i].percentile;
                  }

                  var userResultString = {
                    big5: newString
                  };

                  // console.log("**********************************");
                  // console.log("**********************************");
                  // console.log(userResultString);

                  db.User.update(userResultString, {
                    where: {
                      id: id
                    }
                  }).then(function() {
                    // console.log("**********************************");
                    // console.log("**********************************");
                    // console.log(userResultString);
                    res.send(userBig5);
                  });

                }

                pushUserResults(userBig5);
              });
            });
          }
        });
    }
};