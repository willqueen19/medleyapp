import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import img1 from '../../assets/WVal-1.jpeg';
import img2 from '../../assets/WVal-2.jpeg';
import img3 from '../../assets/WVal-3.jpeg';

class WomensValues extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey3">
        <h1>Which best describes you?</h1>
        <CardDeck>
          <SurveyCard surveyImage={img1} surveyTitle={"I prefer sustainable clothing items"} surveyNext={'/recommend'} />
          <SurveyCard surveyImage={img2} surveyTitle={"I prefer to splurge for luxury quality"} surveyNext={'/recommend'}/>
          <SurveyCard surveyImage={img3} surveyTitle={"I prefer casual, everyday clothes"} surveyNext={'/women/style'}/>
        </CardDeck>
      </div>
    )
  }
}

export default WomensValues;
