import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Unorderedlist.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
function Unorderedlist() {
    return (
        <div className="Unorderedlist">
            
            <Navbar  >

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="free-nav-main" >
                        <Link className="free-nav-head" to="/">99 FREELANCE</Link>
                        <div className="div-nav">
                            <Link className="free-nav" to="/domain">Domains</Link>
                            <Link className="free-nav" to="/becomefreelancer">Become Freelancer</Link>
                            <Link className="free-nav" to="/workourway">Payment</Link>
                            <Link className="free-nav" to="/topfreelancers">Review</Link>
                            <Link className="free-nav" to="/insight">Insights</Link>
                            <Link className="free-nav" to="/contact">Contact</Link>
                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </div>
    );
}

export default Unorderedlist;
