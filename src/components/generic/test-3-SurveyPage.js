import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from './ThreeSurveyCard.js';

class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey3">
        <h1>Question?</h1>
        <CardDeck>
          <SurveyCard />
          <SurveyCard />
          <SurveyCard />
        </CardDeck>
      </div>
    )
  }
}

export default Survey;
