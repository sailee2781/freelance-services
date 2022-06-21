import './TopFreelancers.css'
import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import photo from '../images/freelance.jpg'
import Footer from './Footer'
import {Link } from 'react-router-dom'
import Unorderedlist from './Unorderedlist';
export default class TopFreelancers extends React.Component {
    state = {
        Freelancers: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5555/topfreelancers`)
            .then(res => {
                const Freelancers = res.data;
                console.log(res.data)
                this.setState({ Freelancers });
            })
    }

    render() {
        return (
            <div className="freelancers-main-div" >
                <Unorderedlist />
                <h1 className="top-freelancer-heading-1">What Our Clients Say</h1>
                <Container>
                    <Row>
                        {this.state.Freelancers.map(Freelancer => {
                            let img = Freelancer.image
                            return (
                                <Col className="top-freelancers-col">
                                    <Card className="Cardprops">
                                        <Card.Img className="Cardimg" variant="top" src={img} />
                                        <Card.Body>

                                            <Card.Title className="Card-title">{Freelancer.freelancer_name}</Card.Title>
                                            <Card.Text >
                                                <h6>{Freelancer.post}</h6>
                                                <p className="card-text-review">{Freelancer.review}</p>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }

                        )}
                    </Row>
                </Container>

            </div>
        )
    }
}