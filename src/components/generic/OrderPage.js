import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';



class OrderPage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
      var hour = new Date().getHours();
      var min = new Date().getMinutes();
      var sec = new Date().getSeconds();
      var orderNum = String(new Date().getHours()) + String(new Date().getMinutes())+ String(new Date().getSeconds());

      return(
        <Container>
        <Row>
        <Col>
      <div className="order">
          <h1 className="display-3">All Set!</h1>
          <h3 className="lead">Your clothes will be in the dressing room, ready for you to try on in a few minutes.</h3>
          <h2>Order #{orderNum}</h2>
          <Form>
          <FormGroup>
          <Label for="firstName" className="mr-sm-2">Tell a store associate your order number or enter your name!</Label>

              <Input type="text" name="name" id="firstName" placeholder="Enter your name" />
              </FormGroup>
          </Form>
          <Link className="submit" to="/">
              <Button className="submit">Finish  <i class="fas fa-check"></i></Button>
          </Link>
      </div>
      </Col>
      </Row>
      </Container>
)
  }
}

export default OrderPage;
