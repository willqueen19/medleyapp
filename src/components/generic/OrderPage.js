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
          <h1 className="display-3">All set!</h1>
          <p className="lead">Your clothes will be at the dressing room,
            ready for you to try on in a few minutes.</p>
          <Label for="firstName" className="mr-sm-2"></Label>
          <Form inline>
              <Input type="text" name="name" id="firstName" placeholder="First Name" />
              <Button>Submit</Button>
          </Form>
      </div>
)
  }
}

export default OrderPage;
