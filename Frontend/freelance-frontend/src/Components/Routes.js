import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import App from '../App'
import Services from '../Components/Services';
//import Footer from '../src/Components/Footer';
import WorkOurWay from '../Components/WorkOurWay'
import TopFreelancers from '../Components/TopFreelancers';
import Contact from '../Components/Contact';
import Agreement from "../Components/Agreement";
import Insights from '../Components/Insights'
import DomainsAvailable from "./DomainsAvailable";
import Prog from './Prog';
import  Prog_Details  from "./Prog_Details";
import BecomeFreelancer from "./BecomeFreelancer";
export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/app">
            <App />
          </Route>
          <Route path="/service">
            <Services />
          </Route>
          <Route path="/topfreelancers">
            <TopFreelancers />
          </Route>
          <Route path="/workourway">
            <WorkOurWay />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/agreement">
            <Agreement />
          </Route>
          <Route path="/insight">
            <Insights />
          </Route>
          <Route path="/domain">
            <DomainsAvailable />
          </Route>
          <Route path="/prog">
            <Prog />
          </Route>
          <Route path="/prog_details/:name">
            <Prog_Details/>
          </Route>
          <Route path="/becomefreelancer">
            <BecomeFreelancer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

