import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import img1 from '../../assets/WTyp-1.jpeg';
import img2 from '../../assets/WTyp-2.jpeg';

class WomensType extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey2">
        <h1>What do you prefer?</h1>
        <CardDeck>
          <SurveyCard surveyImage={img1} surveyTitle={"Two piece outfits"} surveySubtitle={"Top + Bottoms"} surveyNext={'/women/color'} />
          <SurveyCard surveyImage={img2} surveyTitle={"One piece outfits"} surveySubtitle={"Dresses + Jumpsuits"} surveyNext={'/women/color'}/>
        </CardDeck>
      </div>
    )
  }
}

export default WomensType;
