var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport) {

    var User = require('../../models/user');

    var GoogleStrat = require('passport-google-oauth20').Strategy;
    // var LinkedInStrategy = require('passport-linkedin').Strategy;
    // var TwitterStrategy = require('passport-twitter').Strategy;

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });


    passport.use(new GoogleStrat({
        clientID: "368397746508-4kj26rurvv18sgt2at6g89493q3jbi9q.apps.googleusercontent.com",
        clientSecret: "SAIPIsGxN7yV10LVdV6hYcp4",
        callbackURL: "http://localhost:3001/auth/google/dash",
        passReqToCallback : true
    }, function(req, token, refreshToken, profile, done){
        process.nextTick(function(){
            if(!req.user){
                User.findOne({'google.id': profile.id}, function(err, user){
                    if(err){
                        return done(err);
                    }
                    if(user){
                        if(!user.google.token){
                            user.google.token = token;
                            user.google.name = profile.displayName;
                            user.google.email = profile.emails[0].value;

                            user.save(function(err){
                                if(err){
                                    throw err;
                                }
                                return done(null, user)
                            });
                        }
                        return done(null, user);
                    } else {
                        var newUser = new User();
                        console.log(profile);

                        newUser.name = profile.displayName
                        newUser.google.id    = profile.id;
                        newUser.google.token = token;
                        newUser.google.name  = profile.displayName;
                        newUser.google.email = profile.emails[0].value; // pull the first email

                        newUser.save(function(err) {
                            if (err){
                                throw err;
                            }
                            return done(null, newUser);
                        });
                    }
                });
            } else {
                // user already exists and is logged in, we have to link accounts
                var user = req.user; // pull the user out of the session

                user.google.id = profile.id;
                user.google.token = token;
                user.google.name = profile.displayName;
                user.google.email = profile.emails[0].value; // pull the first email

                user.save(function(err) {
                    if (err){
                        throw err;
                    }
                    return done(null, user);
                });
            }
        });
    }));



    //     process.nextTick(function(){
    //         if(!req.user){
    //             User.findOne({'google.id': profile.id}, function(err, user){
    //                 if(err){
    //                     return done(err);
    //                 }
    //                 if(user){
    //                     if(!user.google.token){
    //                         user.google.token = token;
    //                         user.google.name = profile.displayName;
    //                         user.google.email = profile.emails[0].value;

    //                         user.save(function(err){
    //                             if(err){
    //                                 throw err;
    //                             }
    //                             return done(null, user)
    //                         });
    //                     }
    //                     return done(null, user);
    //                 } else {
    //                     var newUser = new User();

    //                     newUser.google.id    = profile.id;
    //                     newUser.google.token = token;
    //                     newUser.google.name  = profile.displayName;
    //                     newUser.google.email = profile.emails[0].value; // pull the first email

    //                     newUser.save(function(err) {
    //                         if (err){
    //                             throw err;
    //                         }
    //                         return done(null, newUser);
    //                     });
    //                 }
    //             });
    //         } else {
    //             // user already exists and is logged in, we have to link accounts
    //             var user = req.user; // pull the user out of the session

    //             user.google.id = profile.id;
    //             user.google.token = token;
    //             user.google.name = profile.displayName;
    //             user.google.email = profile.emails[0].value; // pull the first email

    //             user.save(function(err) {
    //                 if (err){
    //                     throw err;
    //                 }
    //                 return done(null, user);
    //             });
    //         }
    //     });
    // }));
    

    // passport.use(new LinkedInStrategy(
    //     {
    //         consumerKey: "783z1oywc0jy2o",
    //         consumerSecret: "bq5dR1M0uUIkH5tG",
    //         callbackURL: "http://127.0.0.1:8080/auth/linkedin/callback"
    //     }, function(token, tokenSecret, profile, done) {
    //         User.findOrCreate({linkedInId: profile.id}, function(err, user) {
    //             return done(err, user);
    //         });
    //     }
    // ));

    // passport.use(new TwitterStrategy(
    //     {
    //         consumerKey: "YgNA0vp4PXf3PGzaQDFFlkTec",
    //         consumerSecret: "dnisE91uTXPn4wvuin1SsLixjL6Y6RQI0W36u0nfmu65dZgCF9",
    //         callbackURL: "http://127.0.0.1:8080/auth/twitter/callback"
    //     }, function(token, tokenSecret, profile, done){
    //         User.findOrCreate({twitterId: profile.id}, function(err, user){
    //             return done(err, user);
    //         });
    //     }
    // ));
}
