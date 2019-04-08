import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/TwoSurveyCard.js';
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../assets/MCas-1.jpeg';
import img2 from '../../assets/MCas-2.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';

class MensCasual extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

    this.selectOutdoorsy = this.selectOutdoorsy.bind(this);
    this.selectHomewear = this.selectHomewear.bind(this);
  }

  selectOutdoorsy() {
      this.props.actions.selectMensCollection(surveyConstants.logg);
  }

  selectHomewear() {
      this.props.actions.selectMensCollection(surveyConstants.basics);
  }

  render () {
    return (
      <Container className="survey survey2">
      <Row>
        <h1>What side of casual clothing are you looking for?</h1>
        <CardDeck className="carddeck carddeck2">
          <SurveyCard surveyImage={img1} surveyTitle={"Outdoorsy"} surveyNext={'/men/shirt'} passedFunction={this.selectOutdoorsy}/>
          <SurveyCard surveyImage={img2} surveyTitle={"Home wear"} surveyNext={'/men/shirt'} passedFunction={this.selectHomewear}/>
        </CardDeck>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
        gender: state.surveyReducer.gender
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (MensCasual);
