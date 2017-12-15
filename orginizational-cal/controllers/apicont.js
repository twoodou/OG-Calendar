var path = require("path");
var db = require("../models");
var request = require("request");
var rp = require('request-promise');
var moment = require('moment');
var Twitter = require("twitter");
moment().format();

var fields = "tech";
var key = "2177251a265c5d6d69c4b171f4e32";
var long = "-96.1581974";
var lat = "36.1524972";
var url = "https://api.meetup.com/find/events?&sign=true&fields=tech&photo-host=public&lon=-96.1581974&page=20&lat=36.1524972&key=2177251a265c5d6d69c4b171f4e32";
// var url = "https://api.meetup.com/find/events?&sign=true&fields=" +
//   fields + "&lon=" + long + "&lat=" + lat + "&key=" + key;

console.log('this is loaded');

var twitterKeys = {
  consumer_key: 'Cen815VuzCzhgjGayrhKiP4To',
  consumer_secret: 'OvyfrKZ7vFsxgpIAeg2YtFhhGyvxzQ8XLb9XIrfwvnNuVr0ubo',
  access_token_key: '925191630650593280-jkXm7MgljRnopiJQxSEebIHnK8fANM1',
  access_token_secret: 'DKHRa8MhDerhJInDduZRaMvetK7KVhaQlzbee7iv7Dez7'
};

var twit = new Twitter(keys);

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
    console.log(req.user.twitter.id);
    var params = {
      user_id: "RockosMdrnSwipe",
      count: 20
    }
    twit.get("statuses/user_timeline", params, function(error, tweets, response){
      if(error){
        console.log(error);
      }
      for(i in tweets){
        console.log(tweets[i].text + " created at: " + tweets[i].created_at);
      }
      interface();
    });
  },

  test: function(req, res) {
    res.status(200).json({
      msg: "Test Route Works!"
    });
  }
};
