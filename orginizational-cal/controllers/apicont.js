var path = require("path");
var axios = require("axios");
var db = require("../models");
// var request = require("request");
// var rp = require('request-promise');
var moment = require('moment');
moment().format();

var fields = "tech";
var key = "2177251a265c5d6d69c4b171f4e32";
var long = "-96.1581974";
var lat = "36.1524972";
var url = "https://api.meetup.com/find/events?&sign=true&fields=tech&photo-host=public&lon=-96.1581974&page=20&lat=36.1524972&key=2177251a265c5d6d69c4b171f4e32";
// var url = "https://api.meetup.com/find/events?&sign=true&fields=" +
//   fields + "&lon=" + long + "&lat=" + lat + "&key=" + key;

module.exports = {
  // 1. Query the Meetup.com API
  getMeetupEvents: function(req, res) {
    var id = req.params.id;
    // var url = "https://api.meetup.com/find/events?&sign=true&fields=" +
    //   fields + "&lon=" + long + "&lat=" + lat + "&key=2177251a265c5d6d69c4b171f4e32";

    var events = [];

    function getEvents() {
      axios({method: 'get', url: 'https://api.meetup.com/find/events?&sign=true&fields=tech&photo-host=public&lon=-96.1581974&page=20&lat=36.1524972&key=2177251a265c5d6d69c4b171f4e32'
        }).then(function(response) {
            for (var i = 0; i < 15; i++) {
              // let k = JSON.parse(response.body);
              let k = response.data;
              // console.log(k[i].name);
              events[i] = {
                name: k[i].name || "default",
                groupName: k[i].group.name || "default",
                date: k[i].time || "default",
                location: k[i].group.localized_location || "default",
                link: k[i].link || "default"
              };
            }

        postEvents(response, events);
      }).catch(function(error) {
        console.log(error);
      });
    }

    function postEvents(response, events) {
      console.log("EVENTS");
      console.log(events);
      console.log("ID = req params");
      console.log(id);
      var mongoObjectId = 'ObjectId(' + '"' + id + '")';
      console.log(mongoObjectId);
        db.User
          .findOneAndUpdate({ _id: id },
            {$set: {"upcomingEvents": JSON.stringify(events)}}
          )
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }

      getEvents();


    // rp(url, function(error, response, html) {

  },

  test: function(req, res) {
    res.status(200).json({msg: "Test Route Works!"});
  }

};
