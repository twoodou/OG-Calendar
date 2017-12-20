import React from "react";
import "./Nav.css";
import moment from "moment";

import NavTime from "./NavBuild/NavTime/NavTime.js";
import NavWeather from "./NavBuild/NavWeather/NavWeather.js";
import NavName from "./NavBuild/NavName/NavName.js";
import NavIcon from "./NavBuild/NavIcon/NavIcon.js";


const Nav = () => 

<div>

  <ul class="nav left-nav main-nav">
    <li class="nav-item navbar-time">
      <NavTime />
    </li>

    <li class="nav-item navbar-weather">
      <NavWeather />
    </li>
  </ul>


  <ul className="nav justify-content-end right-nav main-nav">

    <li className="nav-item navbar-name">
      <NavName />
    </li>

    <li className="nav-item navbar-icon">
      <NavIcon />
    </li>

  </ul>

  <div className="nav-underline"> </div>
  <div className="nav-triangle"> </div>
</div>


export default Nav;
