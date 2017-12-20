import React, {Component} from "react";
import "./calendar.css";

import Nav from "../components/Nav";
import Email from "../components/ItemComponents/Email";
import Reminder from "../components/ItemComponents/Reminder";
import Groupon from "../components/ItemComponents/Groupon";
import Weather from "../components/ItemComponents/Weather";
import Meetup from "../components/ItemComponents/Meetup";
import CalendarMonth from "../components/CalendarMonth";
import CalendarDay from "../components/CalendarDay";


class calendar extends Component {
  state = {
    time: "hello kevin",
    name: "Hello Michael",
    firstLetter:"M",
    weather: "Sunny :D"
  };

componentDidMount(){
  console.log("you worked!");
  console.log(this.state.time);
  console.log("here 88");
    fetch('/auth/session', {credentials: 'same-origin'}).then(function(resp){
      console.log(resp);
    }).catch(function(err){
      console.log(err);
    });
};



render(){
  return(
    <div>
      <Nav
        name={this.state.name}
        letter={this.state.firstLetter}
      />

      <div className="container">
		   <div className="row main-div">
		    <div className="col-sm-4" data-aos="fade-right">
		      	<Email />
		      	<Reminder />
		      	<Groupon />
		      	<Weather />
            <Meetup />
		    </div>
		    <div className="col-sm-8" data-aos="fade-left">
		      	<CalendarMonth />

		    </div>
		   </div>
		  </div>
    </div>
  );
}
}
export default calendar;
