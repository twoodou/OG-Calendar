import React from "react";
import "./calendar.css";

import Nav from "../components/Nav";
import Email from "../components/ItemComponents/Email";
import Reminder from "../components/ItemComponents/Reminder";
import Groupon from "../components/ItemComponents/Groupon";
import Weather from "../components/ItemComponents/Weather";

import CalendarMonth from "../components/CalendarMonth/CalendarMonth.js";


const calendar = () =>
    <div>
      <Nav />
      <div className="container">
		  <div className="row main-div">
		    <div className="col-sm-4" data-aos="fade-right">
		      	<Email />
		      	<Reminder />
		      	<Groupon />
		      	<Weather />
		    </div>
		    <div className="col-sm-8" data-aos="fade-left">
		    	<CalendarMonth />
		    </div>
		  </div>
		</div>
    </div>

export default calendar;