import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import logo from '../../assets/new-Medley-Logo.png';


class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return(
      <div className="landing">
          <img className="ml-auto" src={logo} alt="Logo" />
          <p className="lead" style={{'fontSize': '40px'}}>Personalized Outfit Recommendations</p>
          <p className="lead">
              <Link to={'/survey/'}>
                 <Button size="lg">Style me: Create my outfit</Button>
              </Link>
          </p>
      </div>
)
  }
}

export default Landing;
