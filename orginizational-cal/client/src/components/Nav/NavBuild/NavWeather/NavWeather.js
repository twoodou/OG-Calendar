import React, {Component} from "react";
import "./NavWeather.css";
import axios from "axios";

class NavWeather extends Component {
  state = {
    lat: 36.153980,
    lon: -95.992775,
    temperature: 69,
    weather: "Sunny",
    city: "Tulsa, OK"
  };

componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=> {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.setState({lat});
        this.setState({lon});
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
}


componentDidUpdate() {
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + this.state.lat + "&lon=" + this.state.lon + "&appid=" + APIKey;
  axios.get(queryURL).then((response) => {
    console.log(response.data.main.temp);
    var temp = (9 / 5) * (response.data.main.temp-273) - 32;
    // var newTemp = (parseInt(response.data.main.temp)-273.15)*1.80;
    this.setState({
      temperature: (temp*100).toFixed(0),
      weather: response.data.weather[0].main,
      city: response.data.name
    });
    // return;
});
}

render() {
    return (<div className="nav-weather">
      <a href="https://www.google.com/search?ei=FnMxWqH-DYeejwOu366YDQ&q=weather&oq=weat&gs_l=psy-ab.1.0.0i131i67k1j0j0i67k1l2j0i131k1j0i131i67k1l3j0i67k1j0i131k1.216008.217106.0.219056.4.4.0.0.0.0.194.544.0j4.4.0....0...1.1.64.psy-ab..0.4.543...0i3k1.0.yXFc_B3j7lA" target="_blank">
        <p>
          Weather In {this.state.city} ||
          <i class="fa fa-sun-o" aria-hidden="true"></i>
          {this.state.temperature} &#8457;
        </p>
      </a>
    </div>);
}

}
export default NavWeather;
