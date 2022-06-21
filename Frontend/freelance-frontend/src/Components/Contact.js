import './Contact.css'
import React from 'react';
import { Button,  Form, FormGroup,  Row, Col } from 'react-bootstrap';
import axios from 'axios';
import photo from '../images/freelance.jpg'
import Footer from './Footer'
import Unorderedlist from './Unorderedlist';
import { Link } from 'react-router-dom';
export default class Contact extends React.Component {
    state = {
        full_name: '',
        email: '',
        domain : '',
        message: '',
      }
    
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
        const user = {
            full_name: this.state.full_name,
            email: this.state.email,
            domain: this.state.domain,
            message: this.state.message,
        };
    
        console.log(user)
        axios.post(`http://localhost:5555/contact`,  user )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    
      }

    render() {
        const { full_name, email , domain , message } = this.state
        return (
            <div className="freelancers-main-div" >
                <Unorderedlist />
               <h1 className="top-freelancer-heading-1">Contact Us...</h1>
                <div className="top-freelancers-form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="top-freelancers-heading">Full Name</Form.Label>
                            <Form.Control type="name" value={full_name} name="full_name" placeholder="Enter full name" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                Everything will be confidential.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="top-freelancers-heading">Email address</Form.Label>
                            <Form.Control type="email" value={email} name="email" placeholder="Enter email" onChange={this.handleChange}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="top-freelancers-heading" style={{ width: "100%" }}>Domain</Form.Label>
                            <Form.Control type="text" value={domain} name="domain" placeholder="Domain" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage">
                            <Form.Label className="top-freelancers-heading">Message</Form.Label>
                            <Form.Control className="top-freelancers-placeholder" type="Message" value={message} name="message" placeholder="Enter Message" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                Everything will be confidential.
                            </Form.Text>
                        </Form.Group>
                        <Button className="top-freelancers-button" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}