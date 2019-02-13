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

  nextQuestion() {
    // replace '/survey/' with props link to next survey page
    window.open('/survey','_self');
  }

  render () {
    return (
        <Card className='card3' onClick={()=>this.nextQuestion()}>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>Card subtitle</CardText>
          </CardBody>
        </Card>
    )
  }
}

export default ThreeSurveyCard;
