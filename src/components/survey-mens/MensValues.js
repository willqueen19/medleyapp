import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import img1 from '../../assets/MVal-1.jpeg';
import img2 from '../../assets/MVal-2.jpeg';
import img3 from '../../assets/MVal-3.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';

class MensValues extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="survey survey3">
        <h1>Which best describes you?</h1>
        <CardDeck className="carddeck carddeck3">
          <SurveyCard surveyImage={img1} surveyTitle={"I prefer sustainable clothing items"} surveyNext={'/recommend'} />
          <SurveyCard surveyImage={img2} surveyTitle={"I prefer to be sporty"} surveyNext={'/recommend'}/>
          <SurveyCard surveyImage={img3} surveyTitle={"I prefer casual, everyday clothes"} surveyNext={'/men/style'}/>
        </CardDeck>
      </div>
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
