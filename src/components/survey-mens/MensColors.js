import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import img1 from '../../assets/MCol-1.jpeg';
import img2 from '../../assets/MCol-2.jpeg';
import img3 from '../../assets/MCol-3.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from "../../constants/survey-constants";

class MensColors extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectBright = this.selectBright.bind(this);
    this.selectDark = this.selectDark.bind(this);
    this.selectPattern = this.selectPattern.bind(this);
  }

  selectBright() {
    this.props.actions.selectColor(surveyConstants.bright_colors);
  }

  selectDark() {
    this.props.actions.selectColor(surveyConstants.dark_colors);
  }

  selectPattern() {
    this.props.actions.selectColor(surveyConstants.patterns);
  }

  render () {
    return (
      <div className="survey survey3">
        <h1>What do you prefer?</h1>
        <CardDeck className="carddeck carddeck3">
          <SurveyCard surveyImage={img1} surveyTitle={"Bright Colors"} surveyNext={'/recommend'} passedFunction={this.selectBright}/>
          <SurveyCard surveyImage={img2} surveyTitle={"Dark Colors"} surveyNext={'/recommend'} passedFunction={this.selectDark}/>
          <SurveyCard surveyImage={img3} surveyTitle={"Patterns"}surveyNext={'/recommend'} passedFunction={this.selectPattern}/>
        </CardDeck>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MensColors);
