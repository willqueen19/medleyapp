import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/TwoSurveyCard.js';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../assets/MVal-1.jpeg';
import img2 from '../../assets/MVal-2.jpeg';
import img3 from '../../assets/MVal-3.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants'

class MensValues extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectSustainable = this.selectSustainable.bind(this);
    this.selectSporty = this.selectSporty.bind(this);

    // <SurveyCard surveyImage={img2} surveyTitle={"I prefer to be sporty"} surveyNext={'/men/shirt'} passedFunction={this.selectSporty}/>

  }

  selectSustainable() {
    this.props.actions.selectMensCollection(surveyConstants.conscious);
  }

  selectSporty() {
    this.props.actions.selectMensCollection(surveyConstants.hm_men);
  }

  render () {
    return (
      <Container className="survey survey3">
      <h1>Which best describes you?</h1>
      <Row>

        <CardDeck className="carddeck carddeck2">
          <Col sm = "2" xs = "0"></Col>
          <SurveyCard surveyImage={img1} surveyTitle={"I prefer sustainable clothing items"} surveyNext={'/men/shirt'} passedFunction={this.selectSustainable}/>
          <SurveyCard surveyImage={img3} surveyTitle={"I prefer casual, everyday clothes"} surveyNext={'/men/style'}/>
        </CardDeck>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    gender: state.surveyReducer.collection
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MensValues);
