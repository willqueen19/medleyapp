import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';

class TwoSurveyCard extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  nextQuestion() {
    // replace '/survey3/' with props link to next survey page
    window.open('/survey3','_self');
  }

  render () {
    return (
        <Card className="card2" onClick={()=>this.nextQuestion()}>
          <CardImg top width="100%" src={this.props.surveyImage} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>Card subtitle</CardText>
          </CardBody>
        </Card>
    )
  }
}

export default TwoSurveyCard;
