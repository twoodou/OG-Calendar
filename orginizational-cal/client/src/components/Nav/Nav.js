import React from "react";
import "./Nav.css";
import moment from "moment";

import NavTime from "./NavBuild/NavTime/NavTime.js";
import NavWeather from "./NavBuild/NavWeather/NavWeather.js";
import NavName from "./NavBuild/NavName/NavName.js";
import NavIcon from "./NavBuild/NavIcon/NavIcon.js";


const Nav = (props) =>

<div>
{console.log(props)}

  <ul className="nav left-nav">
    <li className="nav-item navbar-time">
      <NavTime />
    </li>

    <li className="nav-item navbar-weather">
      <NavWeather />
    </li>
  </ul>


  <ul className="nav justify-content-end right-nav">

    <li className="nav-item navbar-name">
      <NavName name={props.name} />
    </li>

    <li className="nav-item navbar-icon">
      <NavIcon letter={props.letter}  />
    </li>

  </ul>

  <div className="nav-underline"> </div>
  <div className="nav-triangle"> </div>
</div>


export default Nav;
