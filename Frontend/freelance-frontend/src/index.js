import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Services from '../src/Components/Services';
import Footer from '../src/Components/Footer';
import WorkOurWay from '../src/Components/WorkOurWay'
import TopFreelancers from './Components/TopFreelancers';
import Contact from './Components/Contact';
import Routes from '../src/Components/Routes';
import Agreement from '../src/Components/Agreement'
import Unorderedlist from './Components/Unorderedlist';
import Insight from './Components/Insights'
import DomainsAvailable from './Components/DomainsAvailable'
import Prog_details from './Components/Prog_Details';
import BecomeFreelancer from './Components/BecomeFreelancer'
ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
