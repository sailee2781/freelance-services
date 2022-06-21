import '../Components/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardImage from '../images/landing.jpg'
import { Container, CardGroup, Card, Col, Row } from 'react-bootstrap'
function Footer() {
    return (
        <div className="footer" >
            <div className="main-footer">
                <div>
                    <h3 className="head" >Skills in High Demand by Clients</h3>
                    <ul>
                        <li className="skill">
                            <a className="link" href="https://www.toptal.com/freelance-jobs/developers/react">React.js</a>
                        </li>
                        <li className="skill">
                            <a className="link" href="https://www.toptal.com/freelance-jobs/developers/nodejs">Node.js</a>
                        </li>
                        <li className="skill">
                            <a className="link" href="https://www.toptal.com/freelance-jobs/developers/c-sharp">C#</a>
                        </li>
                        <li className="skill">
                            <a className="link" href="https://www.toptal.com/freelance-jobs/developers/python">Python</a>
                        </li>
                        <li className="skill">
                            <a className="link" href="https://www.toptal.com/freelance-jobs/developers/javascript">JavaScript</a>
                        </li>
                        <li className="skill">
                            <a className="link" href="https://www.toptal.com/freelance-jobs/developers/react-native">React Native</a>
                        </li >
                    </ul>
                </div>
                <div>
                    <h3 class="about" >About</h3>
                    <ul>
                        <li className="about1">
                            <a className="link" href="/top-3-percent">Top 3%</a>
                        </li>
                        <li className="about1">
                            <a className="link" href="/clients">Clients</a>
                        </li>
                        <li className="about1">
                            <a className="link" href="/freelance-jobs/talent-assessment">Talent Assessment</a>
                        </li>
                        <li className="about1">
                            <a className="link" href="/ultimate-freelancing-guide">Ultimate Freelancing Guide</a>
                        </li>
                        <li className="about1">
                            <a className="link" href="/blog">Blog</a>
                        </li>
                        <li className="about1">
                            <a className="link" href="/community">Community</a>
                        </li>
                        <li className="about1">
                            <a className="link" href="/about">About Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="contact" data-id="footer-column-title">Contact</h3>
                    <ul>
                        <li className="contact1">
                            <a className="link" href="/contact">Contact Us</a>
                        </li>
                        <li className="contact1">
                            <a className="link" href="/press-center">Press Center</a>
                        </li>
                        <li className="contact1">
                            <a className="link" href="/careers">Careers</a>
                        </li>
                        <li className="contact1">
                            <a className="link" href="/faq">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="social">Social</h3>
                    <div className="social1">
                        <li className="social2">
                            <a className="link" href="https://twitter.com/AiIndia2?s=09" target="_blank" rel="noopener">
                                <img className="img" src="https://www.haptik.ai/hubfs/Footer%20Social%20icons/Twitter-footer.svg" alt="Twitter-footer" loading="lazy" />
                            </a>
                        </li>
                        <li className="social2">
                            <a className="link" href="https://www.linkedin.com/company/ai-india/" target="_blank" rel="noopener">
                                <img className="img" src="https://www.haptik.ai/hubfs/Footer%20Social%20icons/Linkedin-footer.svg" alt="Linkedin-footer" loading="lazy" />
                            </a>
                        </li>
                        <div className="social2">
                            <a className="link" href="https://www.youtube.com/watch?v=iqQWAADYnQc" target="_blank" rel="noopener">
                                <img className="img" src="https://www.haptik.ai/hubfs/Footer%20Social%20icons/YT-footer.svg" alt="YT-footer" loading="lazy" />
                            </a>
                        </div>
                        <li className="social2">
                            <a className="link" href="https://fb.watch/v/11tmdR9Dd/" target="_blank" rel="noopener">
                                <img className="img" src="https://www.haptik.ai/hubfs/Footer%20Social%20icons/Facebook-footer.svg" alt="Facebook-footer" loading="lazy" />
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
