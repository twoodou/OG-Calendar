import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Email from "./components/ItemComponents/Email";


const App = () =>
  <Router>
    <div>
      <Nav />
      <Email />
    </div>
  </Router>;

export default App;
