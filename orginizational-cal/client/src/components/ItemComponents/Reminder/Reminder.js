import React from "react";
import "./Reminder.css";

const Reminder = () =>

<div className="reminder-comp">
	<a href="#">
		<div className="reminder-div">
			<i class="fa fa-bell-o" aria-hidden="true"></i>
			<button className="reminder-btn" type="button"> 
				Reminder
			</button>
		</div>
	</a>
</div>

export default Reminder;