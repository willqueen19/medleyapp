import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from './TwoSurveyCard.js';
import womensImg from '../womensmens.jpeg';

class SurveyMensWomens extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey2">
        <h1>Question?</h1>
        <CardDeck>
          <SurveyCard surveyImage={womensImg} />
          <SurveyCard surveyImage={womensImg}/>
        </CardDeck>
      </div>
    )
  }
}

export default SurveyMensWomens;
