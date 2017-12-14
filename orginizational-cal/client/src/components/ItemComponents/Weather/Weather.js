import React from "react";
import "./Weather.css";

const Weather = () =>

<div className="weather-comp">
	<a href="https://weather.com/" target="_blank">
		<button className="weather-button" type="button">
			Todays Forecast
			<i class="fa fa-sun-o" aria-hidden="true"></i> 
		</button>
	</a>
</div>


export default Weather;