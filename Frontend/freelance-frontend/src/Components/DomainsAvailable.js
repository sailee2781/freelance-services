import './DomainsAvailable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Prog from './Prog'
import { Link } from 'react-router-dom'
import Unorderedlist from './Unorderedlist';
import { FaNewspaper, FaReadme, FaSketch, FaFileAlt, FaLaptopCode, FaCogs, FaDeezer, FaFirstdraft, FaBalanceScaleLeft, FaCalculator } from "react-icons/fa";
function DomainsAvailable() {
    return (
        <div className="domain-section">
            <section className="domain-section">
            <Unorderedlist />
                <div>
                    <h2 className="domain-main-heading">
                        Find Top Freelancers
                    </h2>
                    <ul className="Domain-ul">
                        <li className="domain-li1">
                            <Link className="domain-anchor" to={"/prog"} aria-label="Programming &amp; Development" title="Programming &amp; Development">
                                <header className="domain-header">
                                    <div className="domain-icon">
                                        <FaLaptopCode size={60} />
                                    </div>
                                    <h2 className="domain-heading1">Programming &amp; Development
                                    </h2>
                                    <p className="domain-para">178,119 Freelancers </p>
                                </header>
                            </Link>
                        </li>
                        <li className="domain-li1">
                            <a className="domain-anchor" href="/post-job/design-art/" aria-label="Design &amp; Art" title="Design &amp; Art">
                                <header className="domain-header">
                                    <div className="domain-icon">
                                        <FaSketch size={60} />
                                    </div>
                                    <h2 className="domain-heading1">Design &amp; Art
                                    </h2>
                                    <p className="domain-para">108,210 Freelancers
                                    </p>
                                </header>
                            </a>
                        </li>
                        <li className="domain-li1">
                            <a className="domain-anchor" href="/post-job/writing-translation/" aria-label="Writing &amp; Translation" title="Writing &amp; Translation">
                                <header className="domain-header">
                                    <div className="domain-icon">
                                        <FaFileAlt size={60} />
                                    </div>
                                    <h2 className="domain-heading1">Writing &amp; Translation </h2>
                                    <p className="domain-para">102,816 Freelancers
                                    </p>
                                </header>
                            </a>
                        </li>
                        <li className="domain-li1">
                            <a className="domain-anchor" href="/post-job/administrative-secretarial/" aria-label="Administrative &amp; Secretarial" title="Administrative &amp; Secretarial">
                                <header className="domain-header">
                                    <div className="domain-icon">
                                        <FaCogs size={60} />
                                    </div>
                                    <h2 className="domain-heading1">Administrative &amp; Secretarial
                                    </h2>
                                    <p className="domain-para">56,825 Freelancers
                                    </p>
                                </header>
                            </a>
                        </li>
                        <li className="domain-li1">
                            <a className="domain-anchor" href="/post-job/sales-marketing/" aria-label="Sales &amp; Marketing" title="Sales &amp; Marketing">
                                <header className="domain-header">
                                    <div className="domain-icon">
                                        <FaDeezer size={60} />
                                    </div>
                                    <h2 className="domain-heading1">Sales &amp; Marketing </h2>
                                    <p className="domain-para">45,995 Freelancers </p>
                                </header>
                            </a>
                        </li>
                        <li className="domain-li1">
                            <a className="domain-anchor" href="/post-job/business-finance/" aria-label="Business &amp; Finance" title="Business &amp; Finance">
                                <header className="domain-header">
                                    <div className="domain-icon">
                                        <FaFirstdraft size={60} />
                                    </div>
                                    <h2 className="domain-heading1">Business &amp; Finance
                                    </h2>
                                    <p className="domain-para">30,530 Freelancers </p>
                                </header>
                            </a>
                        </li>
                        <li className="domain-li1">
                            <a className="domain-anchor" href="/post-job/writing-translation/" aria-label="Writing &amp; Translation" title="Writing &amp; Translation">
                                <header className="domain-header">
                                    <div className="domain-icon">
                                        <FaReadme size={60} />
                                    </div>
                                    <h2 className="domain-heading1">Education &amp; Training </h2>
                                    <p className="domain-para">102,816 Freelancers
                                    </p>
                                </header>
                            </a>
                        </li>
                        <li className="domain-li1">
                            <a className="domain-anchor" href="/post-job/writing-translation/" aria-label="Writing &amp; Translation" title="Writing &amp; Translation">
                                <header className="domain-header">
                                    <div className="domain-icon">
                                        <FaBalanceScaleLeft size={60} />
                                    </div>
                                    <h2 className="domain-heading1">Legal </h2>
                                    <p className="domain-para">102,816 Freelancers
                                    </p>
                                </header>
                            </a>
                        </li>
                        <li className="domain-li1">
                            <a className="domain-anchor" href="/post-job/writing-translation/" aria-label="Writing &amp; Translation" title="Writing &amp; Translation">
                                <header className="domain-header">
                                    <div className="domain-icon">
                                        <FaCalculator size={60} />
                                    </div>
                                    <h2 className="domain-heading1">Engineering &amp; Architecture </h2>
                                    <p className="domain-para">102,816 Freelancers
                                    </p>
                                </header>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default DomainsAvailable;
