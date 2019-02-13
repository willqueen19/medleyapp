import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import img1 from '../../assets/MW-1.jpeg';
import img2 from '../../assets/MW-2.jpeg';
import img3 from '../../assets/MW-2.jpeg';

class MensOccasion extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey3">
        <h1>What's the occasion?</h1>
        <CardDeck>
          <SurveyCard surveyImage={img1} surveyTitle={"Party"} surveyNext={'/shirt-men'} />
          <SurveyCard surveyImage={img2} surveyTitle={"Work"} surveyNext={'/shirt-men'}/>
          <SurveyCard surveyImage={img3} surveyTitle={"Everyday Wear"} surveyNext={'/value-men'}/>
        </CardDeck>
      </div>
    )
  }
}

export default MensOccasion;
