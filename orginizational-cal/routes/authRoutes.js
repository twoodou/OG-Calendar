var authCont = require('../controllers/authcont.js');

module.exports = function(app, passport) {
	app.get('/auth/google', passport.authenticate('google', {scope: ['https://www.googleapis.com/auth/calendar', 
		'https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email']}), function(req, res){});

	app.get('/auth/google/dash', passport.authenticate('google', 
		{
			successRedirect: '/dash',
			failureRedirect: '/'
		}
	));


	function isLoggedIn(req, res, next) {
	    if (req.isAuthenticated()){
	        return next();
	    }
	    res.redirect('/');
	}
};
