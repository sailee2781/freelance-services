import '../Components/Services.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Guru from '../images/guru.PNG'
import {Link } from 'react-router-dom'
import Unorderedlist from './Unorderedlist';
import { Container, CardGroup, Card, Col, Row } from 'react-bootstrap'
function Services() {
    return (
        <div className="div-1-service" >
            <Unorderedlist />
            <h1 className="service-heading-free">
                Why Over 3 Million People Choose Us....!
            </h1>
            <img src={Guru} alt="background" className='service-img' />
        </div>
    );
}

export default Services;
 