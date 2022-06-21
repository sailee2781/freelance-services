import './Contact.css'
import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Unorderedlist from './Unorderedlist';
export default class BecomeFreelancer extends React.Component {
    state = {
        domain_name: '',
        freelancer_name: '',
        intro: '',
        cost: '',
        image: '',
      }
    
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);
      }
    
      handleSubmit = event => {
        event.preventDefault();
        const data = {
            domain_name: this.state.domain_name,
            freelancer_name: this.state.freelancer_name,
            intro: this.state.intro,
            cost: this.state.cost,
            image: this.state.image,
        }
    
        console.log(data)
      
        axios.post(`http://localhost:5555/progdomain`,  data )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    
      }
    
   
    render() {
        const { domain_name, freelancer_name, intro,cost,image } = this.state
        return (
            <div className="freelancers-main-div" >
                <Unorderedlist/>
               <h1 className="top-freelancer-heading-1">Become Freelancer</h1>
                <div className="top-freelancers-form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="top-freelancers-heading">Domain Name</Form.Label>
                            <Form.Control type="text" value={domain_name} name="domain_name" placeholder="Enter domain name" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="top-freelancers-heading">Freelancer Name</Form.Label>
                            <Form.Control type="text" value={freelancer_name} name="freelancer_name" placeholder="Enter full name" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="top-freelancers-heading">Introduction</Form.Label>
                            <Form.Control type="text" value={intro} name="intro" placeholder="Give some introduction" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage">
                            <Form.Label className="top-freelancers-heading">Cost</Form.Label>
                            <Form.Control className="top-freelancers-placeholder" type="cost" value={cost}  name="cost" placeholder="Enter Cost" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="top-freelancers-heading" style={{ width: "100%" }}>Upload Image</Form.Label>
                            <Form.Control type="img" value={image} name="image" placeholder="Upload image" onChange={this.handleChange}/>
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