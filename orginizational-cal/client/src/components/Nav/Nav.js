import React from "react";
import "./Nav.css";
import moment from "moment";

const Nav = () => 

// state = {
//   name: 
// }
<div>
  <ul className="nav justify-content-end">
    <li className="nav-item nav-item-left nav-time">
        { moment().format('LT') }
    </li>

    <li className="nav-item nav-item-left nav-weather">
    	<a href="https://www.google.com/search?ei=FnMxWqH-DYeejwOu366YDQ&q=weather&oq=weat&gs_l=psy-ab.1.0.0i131i67k1j0j0i67k1l2j0i131k1j0i131i67k1l3j0i67k1j0i131k1.216008.217106.0.219056.4.4.0.0.0.0.194.544.0j4.4.0....0...1.1.64.psy-ab..0.4.543...0i3k1.0.yXFc_B3j7lA" target="_blank">
        <p> Weather In Austin, TX  || <i class="fa fa-sun-o" aria-hidden="true"></i> 65 &#8457; </p>
      </a>
    </li>

    <li className="nav-item nav-brand-name">
        Welcome, Emma Nelson
    </li>

    <li className="nav-item nav-brand-icon">
        E
    </li>
  </ul>

  <div className="nav-underline"> </div>
  <div className="nav-triangle"> </div>
</div>


export default Nav;
