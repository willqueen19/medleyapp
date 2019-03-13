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
      <div className="landing">
<<<<<<< HEAD
          <h1 className="display-3">H&M</h1>
          <p className="lead">Powered by Medley</p>
          <p className="lead">
              <Link to="/survey/">
                  <Button>Build an Outfit</Button>
=======
          <h1 className="display-3">Medley</h1>
           <p className="lead">Personalized Outfit Recommendations</p>
          <p className="lead">
              <Link to="/survey/">
                  <Button>Build An Outfit</Button>
>>>>>>> c30e7ce5310a669aa02c2e6fbc8291e949931d9f
              </Link>
          </p>
      </div>
)
  }
}

export default Landing;
