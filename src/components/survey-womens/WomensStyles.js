import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import img1 from '../../assets/WSty-1.jpeg';
import img2 from '../../assets/WSty-2.jpeg';
import img3 from '../../assets/WSty-3.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';

class WomensStyles extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectTrendsetter = this.selectTrendsetter.bind(this);
    this.selectTrendy = this.selectTrendy.bind(this);
    this.selectCasual = this.selectCasual.bind(this);
  }

  selectTrendsetter() {
    this.props.actions.selectWomensCollection(surveyConstants.trend);
  }

  selectTrendy() {
    this.props.actions.selectWomensCollection(surveyConstants.divided);
  }

  selectCasual() {
    // TODO this was changed to l.o.g.g. to fit actual codes in database
    // this.props.actions.selectWomensCollection(surveyConstants.casual);
    this.props.actions.selectWomensCollection(surveyConstants.logg);
  }

  render () {
    return (
      <div className="survey survey3">
        <h1>Which of these best describes your style?</h1>
        <CardDeck className="carddeck carddeck3">
          <SurveyCard surveyImage={img1} surveyTitle={"Trendsetter"} surveySubtitle={"I like to take risks"} surveyNext={'/women/type'} passedFunction={this.selectTrendsetter}/>
          <SurveyCard surveyImage={img2} surveyTitle={"Trendy"} surveySubtitle={"I like to wear what is in style"} surveyNext={'/women/type'} passedFunction={this.selectTrendy}/>
          <SurveyCard surveyImage={img3} surveyTitle={"Casual"} surveySubtitle={"I like comfortable clothes"} surveyNext={'/women/type'} passedFunction={this.selectCasual}/>
        </CardDeck>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    collection: state.surveyReducer.collection
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (WomensStyles);
