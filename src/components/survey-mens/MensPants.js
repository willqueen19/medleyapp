import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import img1 from '../../assets/MW-1.jpeg';
import img2 from '../../assets/MW-2.jpeg';

class MensPants extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey2">
        <h1>What style of pants do you prefer?</h1>
        <CardDeck>
          <SurveyCard surveyImage={img1} surveyTitle={"Shorts"} surveyNext={'/colors-men'} />
          <SurveyCard surveyImage={img2} surveyTitle={"Pants"} surveyNext={'/colors-men'}/>
        </CardDeck>
      </div>
    )
  }
}

export default MensPants;
