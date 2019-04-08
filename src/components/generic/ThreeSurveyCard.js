import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class ThreeSurveyCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
        redirect: null

    };
  }

  cardClicked(nextQuestion) {
    if (this.props.passedFunction) {
        this.props.passedFunction();
    }

    this.setState({
        redirect: nextQuestion
    })
  }

  render () {

    if (this.state.redirect != null) {
        return <Redirect push to={this.state.redirect}/>
    }

    return (
      <Col>
        <Card className="card3" onClick={()=>this.cardClicked(this.props.surveyNext)}>
          <CardImg top src={this.props.surveyImage} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.surveyTitle}</CardTitle>
            <CardText>{this.props.surveySubtitle}</CardText>
          </CardBody>
        </Card>
        </Col>
    )
  }
}

export default ThreeSurveyCard;
