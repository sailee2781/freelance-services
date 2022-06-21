import './App.css';
import {Link} from 'react-router-dom'
import desk from '../src/images/freelance.jpg'
import explore from '../src/images/prog.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Unorderedlist from './Components/Unorderedlist';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="app-main-1">
      <Unorderedlist />
      <div className="App">
        <Container>
          <figure className='position-relative'>
            <img src={desk} alt="background" className='img-app' />
            <figcaption>
              <h1 className="heading-0">
                Find & Hire
              </h1>
              <h1 className="heading-0">
                Expert Freelancers
              </h1>
              <p className="para">As a freelance Developer, you'll enjoy the freedom to choose your own React.js Developer jobs with leading Fortune 500 companies and startups, as well as the flexibility to work remotely on your&nbsp;terms.</p>
              <form class="app-form" role="search" id="searchFreelancers" data-url="" runat="server">
                <input type="text" className="app-input" autocomplete="off" placeholder="What skill are you looking for?" />


              </form>
            </figcaption>
          </figure>
        </Container>
      </div>
      <div className="div-app2">
        <ul className="app-ul-list">
          <li className="app-list">
            <div className="app-div">
                <svg className="u-svg-ico u-copyBlue" role="presentation" height="40" width="40" aria-hidden="true">
                  <use href="/images/homepage/symbol-defs.svg#icon-employer"></use>
                </svg>
              <div className="app-div-second">
                <p className="app-para1">800,000</p>
                <p className="app-para2">Employers Worldwide</p>
              </div>
            </div>
          </li>
          <li className="app-list">
            <div className="app-div">
              <figure className="c-avatar__image">
                <svg className="u-svg-ico u-copyBlue" role="presentation" height="40" width="40" aria-hidden="true">
                  <use href="/images/homepage/symbol-defs.svg#icon-invoice"></use>
                </svg>
              </figure>
              <div className="app-div-second">
                <p className="app-para1">1 Million</p>
                <p className="app-para2">Paid Invoices</p>
              </div>
            </div>
          </li>
          <li className="app-list">
            <div className="app-div">
              <figure className="c-avatar__image">
                <svg className="u-svg-ico u-copyBlue" role="presentation" height="40" width="40" aria-hidden="true">
                  <use href="/images/homepage/symbol-defs.svg#icon-money"></use>
                </svg>
              </figure>
              <div className="app-div-second">
                <p className="app-para1">$250 Million</p>
                <p className="app-para2">Paid to Freelancers</p>
              </div>
            </div>
          </li>
          <li className="app-list">
            <div className="app-div" >
              <div className="app-div-second">
                <p className="app-para1"> 99%</p>
                <p className="app-para2">Customer Satisfaction Rate</p>

              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="explore-main-div">
                <div className="explore-div-second">
                   <h5 className="explore-app">
                     <Link className="explore-app-link" to="/domain">Explore Services</Link>
                   </h5>
                   <p className="explore-sec">Web Development</p>
                   <p className="explore-sec">App Development</p>
                   <p className="explore-sec">Sales & Marketing</p>
                   <p className="explore-sec">Education & Training</p>
                   <p className="explore-sec">Design & Art</p>
                </div>
                <div className="explore-first-half">
                    <figure>
                        <img srcset="https://res.cloudinary.com/gurucom/image/upload/f_auto,b_rgb:f7f7f7/static/homepage/workyourway_2x_xjysgy.jpg
                            2x, 
							https://res.cloudinary.com/gurucom/image/upload/f_auto,w_520,b_rgb:f7f7f7/static/homepage/workyourway_2x_xjysgy.jpg
                            1x" src="https://res.cloudinary.com/gurucom/image/upload/f_auto,w_520,b_rgb:f7f7f7/static/homepage/workyourway_2x_xjysgy.jpg" alt="Work your way" width="575" height="425" loading="lazy" />
                    </figure>
                </div>
                
            </div>
            <Footer/>
    </div>
  );
}

export default App;
