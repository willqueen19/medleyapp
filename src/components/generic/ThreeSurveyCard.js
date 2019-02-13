import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';

class ThreeSurveyCard extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  nextQuestion(props) {
    window.open(props,'_self');
  }

  render () {
    return (
        <Card className="card3" onClick={()=>this.nextQuestion(this.props.surveyNext)}>
          <CardImg top width="100%" src={this.props.surveyImage} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.surveyTitle}</CardTitle>
            <CardText>{this.props.surveySubtitle}</CardText>
          </CardBody>
        </Card>
    )
  }
}

export default ThreeSurveyCard;
