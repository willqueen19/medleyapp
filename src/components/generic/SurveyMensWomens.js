import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from './TwoSurveyCard.js';
import womensImg from '../../assets/MW-1.jpeg';
import mensImg from '../../assets/MW-2.jpeg';

class SurveyMensWomens extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey2">
        <h1>Choose a Department</h1>
        <CardDeck>
          <SurveyCard surveyImage={womensImg} surveyTitle={"Womens"} surveyNext={'/women/occasion'} />
          <SurveyCard surveyImage={mensImg} surveyTitle={"Mens"} surveyNext={'/men/occasion'}/>
        </CardDeck>
      </div>
    )
  }
}

export default SurveyMensWomens;
