import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';



class OrderPage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return(
      <div className="order">
          <h1 className="display-3">Order Submitted!</h1>
          <p className="lead">We are delivering your outfit to the fitting room.</p>
          <h3>Order #5109</h3>
          <Label for="firstName" className="mr-sm-2">Supply your name for the associate!</Label>
          <Form inline>
              <Input type="text" name="name" id="firstName" placeholder="First Name" />
              <Button>Submit</Button>
          </Form>
      </div>
)
  }
}

export default OrderPage;
