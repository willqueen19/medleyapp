import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';

class RecommendationCard extends Component {

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
        <Card className="cardRec" onClick={()=>this.nextQuestion(this.props.surveyNext)}>
          <CardImg top width="100%" src={this.props.resultsImage} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.resultsName}</CardTitle>
            <CardText>{this.props.resultsPrice}</CardText>
          </CardBody>
        </Card>
    )
  }
}

export default RecommendationCard;
