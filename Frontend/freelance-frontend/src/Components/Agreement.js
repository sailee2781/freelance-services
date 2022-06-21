import './Agreement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'
import {Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Unorderedlist from './Unorderedlist';
function Agreement() {
    return (
        <div>
            <Unorderedlist />
            <div className="main-div-agreement">
                <header className="heading-agreement">
                    <h1 className="agreement-h1"> 	Work Your Way With Agreements </h1>

                    <h2 className="agreement-h2">We offer flexibility with our Agreements so that you can define exactly how you want to work online.</h2>

                </header>
                <section className="agreement-section">
                    <div className="agreement-section-div">
                        <h2 className="agreement-section-h1">Payment Terms
                        </h2>
                        <p className="agreement-para1">
                            Choose how and when payments will be made.
                        </p>

                        <div className="agreement-div2">
                            <ul className="agreement-ul">
                                <li className="agreement-li">
                                    <div className="agreement-li-border">
                                        <div className="agreement-li-body">
                                            <div className="agreement-li-div">

                                                <div className="agreement-li-div2">
                                                    <h3 className="agreement-list-h3">
                                                        <strong>Fixed Price</strong>
                                                    </h3>

                                                    <p className="agreement-list-para">
                                                        Create milestones for your job. Set due dates and amount to be paid for
                                                        each milestone.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="agreement-li">
                                    <div className="agreement-li-border">
                                        <div className="agreement-li-body">
                                            <div className="agreement-li-div">
                                                <div className="c-avatar__meta">
                                                    <h3 className="agreement-list-h3">
                                                        <strong>Hourly</strong>
                                                    </h3>

                                                    <p className="agreement-list-para">
                                                        Define the hourly rate and the maximum time to be spent in a week.Generate
                                                        invoices weekly, based on the hours worked.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="agreement-li">
                                    <div className="agreement-li-border">
                                        <div className="agreement-li-body">
                                            <div className="agreement-li-div">

                                                <div className="c-avatar__meta">
                                                    <h3 className="agreement-list-h3">
                                                        <strong>Recurring Payments</strong>
                                                    </h3>

                                                    <p className="agreement-list-para">
                                                        Set up jobs as retainers with this option. Payments can be made weekly,
                                                        biweekly, monthly, or quarterly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="agreement-li">
                                    <div className="agreement-li-border">
                                        <div className="agreement-li-body">
                                            <div className="agreement-li-div">
                                                <div className="c-avatar__meta">
                                                    <h3 className="agreement-list-h3">
                                                        <strong>Task-Based</strong>
                                                    </h3>

                                                    <p className="agreement-list-para">
                                                        Create and assign tasks as required for ad-hoc freelance work. Payments
                                                        can be made for a task once the job is done.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="section2-agreement">
                    <div className="section2-agreement-div">
                        <h2 className="section2-h2">Scope of Work
                        </h2>
                        <p className="section2-para">
                            Define the deliverables for the job, including:
                        </p>

                        <ol className="section2-ol">
                            <li className="section2-li">
                                <p className="c-heading c-heading--small">Understanding of the job</p>
                            </li>
                            <li className="section2-li">
                                <p className="c-heading c-heading--small">Your solution</p>
                            </li>
                            <li className="section2-li">
                                <p className="c-heading c-heading--small">Relevant files and tools</p>
                            </li>
                            <li className="section2-li">
                                <p className="c-heading c-heading--small">Specific deliverables</p>
                            </li>
                            <li className="section2-li">
                                <p className="c-heading c-heading--small">Timeframe and deadlines</p>
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Agreement;
