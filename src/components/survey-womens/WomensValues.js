import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../assets/WVal-1.jpeg';
import img2 from '../../assets/WVal-2.jpeg';
import img3 from '../../assets/WVal-3.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';

class WomensValues extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectSustainable = this.selectSustainable.bind(this);
    this.selectLuxury = this.selectLuxury.bind(this);
  }

  selectSustainable() {
    this.props.actions.selectWomensCollection(surveyConstants.conscious);
  }

  selectLuxury() {
    this.props.actions.selectWomensCollection(surveyConstants.premium_quality);
  }

  render () {
    return (
      <Container className="survey survey3">
      <Row>
        <h1>Which best describes you?</h1>
        <CardDeck className="carddeck carddeck3">
          <SurveyCard surveyImage={img1} surveyTitle={"I prefer sustainable clothing items"} surveyNext={'/women/type'} passedFunction={this.selectSustainable} />
          <SurveyCard surveyImage={img2} surveyTitle={"I prefer to splurge for luxury quality"} surveyNext={'/women/type'} passedFunction={this.selectLuxury}/>
          <SurveyCard surveyImage={img3} surveyTitle={"I prefer casual, everyday clothes"} surveyNext={'/women/style'}/>
        </CardDeck>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    collection: state.surveyReducer.gender
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (WomensValues);
