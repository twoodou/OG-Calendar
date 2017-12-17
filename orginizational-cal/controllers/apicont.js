var path = require('path');
var db = require("../models");
var request = require('request');
var rp = require('request-promise');
var moment = require('moment');
var Twitter = require('twitter');
const util = require('util');

const cheerio = require('cheerio');

const axios = require('axios');
const ax = axios.create({baseURL: 'http://127.0.0.1:3001'});
const exax = axios.create();

moment().format();

var fields = "tech";
var key = "2177251a265c5d6d69c4b171f4e32";
var long = "-96.1581974";
var lat = "36.1524972";
var url = "https://api.meetup.com/find/events?&sign=true&fields=tech&photo-host=public&lon=-96.1581974&page=20&lat=36.1524972&key=2177251a265c5d6d69c4b171f4e32";
// var url = "https://api.meetup.com/find/events?&sign=true&fields=" +
//   fields + "&lon=" + long + "&lat=" + lat + "&key=" + key;

var twitterKeys = {
  consumer_key: 'Cen815VuzCzhgjGayrhKiP4To',
  consumer_secret: 'OvyfrKZ7vFsxgpIAeg2YtFhhGyvxzQ8XLb9XIrfwvnNuVr0ubo',
  access_token_key: '925191630650593280-jkXm7MgljRnopiJQxSEebIHnK8fANM1',
  access_token_secret: 'DKHRa8MhDerhJInDduZRaMvetK7KVhaQlzbee7iv7Dez7'
};

var twit = new Twitter(twitterKeys);

module.exports = {
// 1. Query the Meetup.com API
  getMeetupEvents: function(fields, long, lat) {
    // var id = req.params.id;
    // var url = "https://api.meetup.com/find/events?&sign=true&fields=" +
    //   fields + "&lon=" + long + "&lat=" + lat + "&key=2177251a265c5d6d69c4b171f4e32";

    var events = [];

    rp(url, function(error, response, html) {

      if (error) {
        console.log("error ==================================");
        console.log(error);
      } else {
        for (var i = 0; i < 20; i++) {
          let k = JSON.parse(response.body);
          // console.log(k);
          events[i] = {
            name: k[i].name,
            groupName: k[i].group.name,
            date: k[i].time,
            location: k[i].group.localized_location,
            link: k[i].link,
            // description: k[i].description
          };
          // console.log("RESPONSE " + i + " --------------------");
          // console.log("NAME : " + k[i].name);
          // // Timestamp returned in UTC, need to divide by 1000 to convert to Unix
          // var value = (k[i].time / 1000);
          // var dateString = moment.unix(value).format("MM/DD/YYYY");
          // console.log("TIME : " + dateString);
          // console.log("CITY : " + k[i].group.localized_location);
        }

      }
    }).then(function(events) {
        db.Data.post(events, {
          where: {
            id: id
          }
        });
    });
    // console.log("EVENTS:----------------");
    // console.log(events);
  },

  getTwits: function(req, res){
    console.log('here 76 cont twitt');

    var tweetsArr = [];
    //console.log(req.params.id);
    var params = {
      user_id: req.params.id,
      count: 200
    }
    twit.get("statuses/user_timeline", params, function(error, tweets, response){
      if(error){
        console.log(error);
      }
      for(i in tweets){
        console.log(i);
        tweetsArr[i] = {
          tweet: tweets[i].text,
          createdAt: tweets[i].created_at,
          location: tweets[i].location
        }
      }
      //console.log(tweets);
      //console.log(response);
      res.send(tweetsArr);
    });
  },

  getLink: function(req, res){
    console.log('here 107 cont link');

    var linkArr = [];
    var linkProf;
    //console.log(req.params.id);

    db.User.findOne({"linkedin.id":req.params.id}, function(err, usr){
      if(err){
        console.log(err);
      }
      if(usr.linkedin.profile){
        //console.log(JSON.parse(usr.linkedin.profile));
        linkProf = JSON.parse(usr.linkedin.profile);
        console.log(util.inspect(linkProf));
        var link = linkProf.publicProfileUrl;
        console.log(util.inspect(link));

        // lInProfile(link, function(error, data){
        //   if(error){
        //     console.log(error);
        //   }
        //   console.log(util.inspect(data));
        // });
      }
    });
  },

  getFullSearch: function(req, res){
    console.log("here 93 cont");
    console.log(req.user.twitter.id);

    var twitRes;
    var linkRes;


    // ax.get('/api/getTwits/' + req.user.twitter.id).then(function(response){
    //   //console.log(response.data);
    //   twitRes = response.data;
    // }).catch(function(error){
    //   res.json(error);
    // });

    ax.get('/api/getLink/' + req.user.linkedin.id).then(function(response){
      //console.log(response.data);
      twitRes = response.data;
    }).catch(function(error){
      res.json(error);
    });
  },

  test: function(req, res) {
    res.status(200).json({
      msg: "Test Route Works!"
    });
  }
};
