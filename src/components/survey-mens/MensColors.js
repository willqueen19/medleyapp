import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import img1 from '../../assets/MW-1.jpeg';
import img2 from '../../assets/MW-2.jpeg';
import img3 from '../../assets/MW-2.jpeg';

class MensColors extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey3">
        <h1>What do you prefer?</h1>
        <CardDeck>
          <SurveyCard surveyImage={img1} surveyTitle={"Bright Colors"} surveyNext={'/recommend'} />
          <SurveyCard surveyImage={img2} surveyTitle={"Dark Colors"} surveyNext={'/recommend'}/>
          <SurveyCard surveyImage={img3} surveyTitle={"Patterns"}surveyNext={'/recommend'}/>
        </CardDeck>
      </div>
    )
  }
}

export default MensColors;
