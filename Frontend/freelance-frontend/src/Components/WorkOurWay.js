import '../Components/WorkOurWay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardImage from '../images/landing.jpg'
import Agreement from './Agreement';
import {Link } from 'react-router-dom'
import { Container, CardGroup, Card, Col, Row } from 'react-bootstrap'
import Unorderedlist from './Unorderedlist';
function WorkOurWay() {
    return (
        <div >
            <Unorderedlist />
            <h1 className="heading-work">
                Work Your Way....!
            </h1>
            <div className="main-div">
                <div className="first-half">
                    <figure>
                        <img srcset="https://res.cloudinary.com/gurucom/image/upload/f_auto,b_rgb:f7f7f7/static/homepage/workyourway_2x_xjysgy.jpg
                            2x, 
							https://res.cloudinary.com/gurucom/image/upload/f_auto,w_520,b_rgb:f7f7f7/static/homepage/workyourway_2x_xjysgy.jpg
                            1x" src="https://res.cloudinary.com/gurucom/image/upload/f_auto,w_520,b_rgb:f7f7f7/static/homepage/workyourway_2x_xjysgy.jpg" alt="Work your way" width="575" height="425" loading="lazy" />
                    </figure>
                </div>
                <div className="second-half">
                    <p className="p-heading-work ">
                        Choose from Four Payment Terms and Create Agreements.
                    </p>
                    <div className="div-2">
                        <details className="div-3" open="true">
                            <summary className="sum-1">
                                <svg viewBox="0 0 32 32" height="8" width="8" className="img-1">
                                    <path d="M28.8 6.2L16 19 3.2 6.2 0 9.4l16 16.4L32 9.4z"></path>
                                </svg>
                                Fixed Price
                            </summary>
                            <div className="c-expandable__content">
                                <p>
                                    Set a total fixed cost for your job and create milestones to ensure you're
                                    satisfied every step of the way.  Set a due date and the amount to be paid for each milestone.
                                </p>
                            </div>
                        </details>
                        <details className="div-3">
                            <summary className="sum-1">
                                <svg viewBox="0 0 32 32" height="8" width="8" className="img-1">
                                    <path d="M28.8 6.2L16 19 3.2 6.2 0 9.4l16 16.4L32 9.4z"></path>
                                </svg>
                                Hourly
                            </summary>
                            <div className="c-expandable__content">
                                <p>
                                    Track progress with ease and pay Freelancers by the hour using our Time Tracker software.
                                    If you hire multiple Freelancers for your job,
                                    you'll receive a breakdown of each Freelancer's hourly rate and time tracked.
                                </p>
                            </div>
                        </details>
                        <details className="div-3">
                            <summary className="sum-1">
                                <svg viewBox="0 0 32 32" height="8" width="8" className="img-1">
                                    <path d="M28.8 6.2L16 19 3.2 6.2 0 9.4l16 16.4L32 9.4z"></path>
                                </svg>
                                Task-Based
                            </summary>
                            <div className="c-expandable__content">
                                <p>
                                    Pay for a single completed online freelance task, however big or small.
                                    Create and assign tasks as needed and generate invoice for each task once it is completed.
                                </p>
                            </div>
                        </details>
                        <details className="div-3">
                            <summary className="sum-1">
                                <svg viewBox="0 0 32 32" height="8" width="8" className="img-1">
                                    <path d="M28.8 6.2L16 19 3.2 6.2 0 9.4l16 16.4L32 9.4z"></path>
                                </svg>
                                Recurring Payment
                            </summary>
                            <div className="c-expandable__content">
                                <p>
                                    Easily pay your go-to Freelancers on an ongoing basis.
                                    Set up to four recurring payment rules for any given job - pay every week, every other week, every month, or every quarter.
                                    Stop or resume payments at any point with just a click of a button.
                                </p>
                            </div>
                        </details>
                    </div>
                    <p className="para-2">
                        <Link className="link-1" to="/agreement" >Learn About Agreements</Link>
                    </p>

                </div>
            </div>

        </div>
    );
}

export default WorkOurWay;
