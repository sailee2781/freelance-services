import './Insights.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Unorderedlist from './Unorderedlist';
function Insights() {
    return (
        <div>
            <Unorderedlist />
            <section className="insights-section">
                <div className="insights-div">
                    <h2 className="insights-title">
                        Freelance Insights
                    </h2>
                    <ul className="insights-ul">
                        <li className="insights-li">
                            <article className="insights-card">
                                <a href="https://guru.com/blog/what-is-trello-used-for/" target="_blank">
                                    <figure className="u-margin-bottom--flush">
                                        <img className="insights-img" width="276" height="184" loading="lazy" src="https://res.cloudinary.com/gurucom/image/upload/f_auto,q_auto,w_600,h_400/v1631537924/wordpress/blog/what-is-trello-used-for.jpg" alt="What Is Trello Used For?" />
                                    </figure>
                                    <div className="insights-card-div">
                                        <p className="insights-card-para">
                                            <time className="time" datetime="2019-08-14">October 16, 2021</time>
                                        </p>
                                        <h3 className="insights-card-h1">What Is Trello Used For?</h3>
                                    </div>
                                </a>
                            </article>
                        </li>

                        <li className="insights-li">
                            <article className="insights-card">
                                <a href="https://guru.com/blog/what-is-the-best-email-for-business/" target="_blank">
                                    <figure className="u-margin-bottom--flush">
                                        <img className="insights-img" width="276" height="184" loading="lazy" src="https://res.cloudinary.com/gurucom/image/upload/f_auto,q_auto,w_600,h_400/v1631537932/wordpress/blog/whats-the-best-email-for-business.jpg" alt="What Is the Best Email for Business" />
                                    </figure>
                                    <div className="insights-card-div">
                                            <time className="time-insight" >October 14, 2021</time>
                                        <h3 className="insights-card-h1">What Is the Best Email for Business</h3>
                                    </div>
                                </a>
                            </article>
                        </li>

                        <li className="insights-li">
                            <article className="insights-card">
                                <a href="https://guru.com/blog/what-is-a-cooperative-business/" target="_blank">
                                    <figure className="u-margin-bottom--flush">
                                        <img className="insights-img" width="276" height="184" loading="lazy" src="https://res.cloudinary.com/gurucom/image/upload/f_auto,q_auto,w_600,h_400/v1631537913/wordpress/blog/what-is-coopreative-business.jpg" alt="What Is a Cooperative Business?" />
                                    </figure>
                                    <div className="insights-card-div">
                                        <p className="insights-card-para">
                                            <time className="time" datetime="2019-08-14">October 12, 2021</time>
                                        </p>
                                        <h3 className="insights-card-h1">What Is Cooperative Business?</h3>
                                    </div>
                                </a>
                            </article>
                        </li>

                        <li className="insights-li">
                            <article className="insights-card">
                                <a href="https://guru.com/blog/what-is-a-business-goal/" target="_blank">
                                    <figure className="u-margin-bottom--flush">
                                        <img className="insights-img" width="276" height="184" loading="lazy" src="https://res.cloudinary.com/gurucom/image/upload/f_auto,q_auto,w_600,h_400/v1631537905/wordpress/blog/what-is-a-business-goal.jpg" alt="What Is a Business Goal?" />
                                    </figure>
                                    <div className="insights-card-div">
                                        <p className="insights-card-para">
                                            <time className="time" datetime="2019-08-14">October 10, 2021</time>
                                        </p>
                                        <h3 className="insights-card-h1">What Is a Business Goal?</h3>
                                    </div>
                                </a>
                            </article>
                        </li>

                    </ul>

                    <p className="insights-last-para">
                        <a href="https://www.guru.com/blog/" target="_blank" className="insights-button">View Our Blog</a>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Insights;
