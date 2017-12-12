// ver url = "https://api.meetup.com/2/events?key=ABDE12456AB2324445&group_urlname=ny-tech&sign=true";

var moment = require('moment');
moment().format();

// var url = "https://api.meetup.com/find/upcoming_events?zip=11211&radius=1&key=2177251a265c5d6d69c4b171f4e32";

var url = "https://api.meetup.com/find/events?&sign=true&fields=tech&photo-host=public&lon=-96.1581974&page=20&lat=36.1524972&key=2177251a265c5d6d69c4b171f4e32";

// var url = "https://api.meetup.com/find/upcoming_events?zip=74137&key=2177251a265c5d6d69c4b171f4e32";

var request = require("request");

request(url, function(error, response, html) {

  if (error) {
    console.log("error ==================================");
    console.log(error);
  } else {
    // var k = JSON.parse(response.body);
    //   console.log(k[0]);
    // console.log(JSON.strin(response.body, null, 2));
    // console.log(JSON.parse(response.body));
    for (var i = 0; i < 5; i++) {
      let k = JSON.parse(response.body);
      console.log("RESPONSE " + i + " --------------------");
      //
      // console.log("NAME : " + k.events[i].name);
      // console.log("DATE : " + k.events[i].local_date);
      // console.log("DESCRIPTION : " + k.events[i].description);
      console.log("NAME : " + k[i].name);
      var value = (k[i].time / 1000);
      var dateString = moment.unix(value).format("MM/DD/YYYY");
      console.log("TIME : " + dateString);
      console.log("CITY : " + k[i].group.localized_location);
      // console.log(k.group);
    }

  }
});
