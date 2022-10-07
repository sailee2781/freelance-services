import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Unorderedlist from './Unorderedlist';
import './Prog.css'
import globals from '../globals';
export default class Prog extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    axios.get(`${globals.API + "progdomain"}`)
      .then(res => {
        const courses = res.data;
        this.setState({ courses });
      })
  }

  render() {
    return (
      <div className="prog-main-div" >
         <Unorderedlist />
        <h1 className="prog-heading">Services in Programming Domain</h1>
        <Container>

          <Row>
            {this.state.courses.map(course => {
              let img = course.image
              return (
                <Col className="prog-column">
                  <Card className="prog-card">
                    <Card.Img className="prog-image" variant="top" src={img} />
                    <Card.Body>
                      <Card.Title className="prog-domain-name">{course.domain_name}</Card.Title>
                      <Card.Text className="prog-card-text">
                        {course.intro}
                        <br/>
                        <h6 className="card-mid-head">Cost : {course.cost}</h6>
                      </Card.Text>
                      <button className="btn btn-dark">
                        <Link className="prog-read" to={`/prog_details/${course.domain_name}`}>Read more</Link>
                      </button>
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