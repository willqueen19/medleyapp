import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Jumbotron, Container } from 'reactstrap';

class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
        <div>
          <div>
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Your order has been submitted!</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <button><Link to={"/"}>Go back to beginning</Link></button>
              </Container>
            </Jumbotron>
          </div>
        </div>
    )
  }
}

export default Order;
