import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Jumbotron, Button } from 'reactstrap';



class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return(
      <div>
        <Jumbotron>
          <h1 className="display-3">MEDLEY</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
)
  }
}

export default Landing;
