import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Email from "./components/ItemComponents/Email";
import Reminder from "./components/ItemComponents/Reminder";


const App = () =>
  <Router>
    <div>
      <Nav />
      <Email />
      <Reminder />
    </div>
  </Router>;

export default App;
