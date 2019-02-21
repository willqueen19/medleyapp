import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/TwoSurveyCard.js';
import img1 from '../../assets/MPant-1.jpeg';
import img2 from '../../assets/MPant-2.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';

class MensPants extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectPants = this.selectPants.bind(this);
    this.selectShorts = this.selectShorts.bind(this);
  }

  selectPants() {
      this.props.actions.selectPantsType(surveyConstants.pants);
  }

  selectShorts() {
      this.props.actions.selectPantsType(surveyConstants.shorts);
  }

  render () {
    return (
      <div className="survey survey2">
        <h1>What style of pants do you prefer?</h1>
        <CardDeck className="carddeck carddeck2">
          <SurveyCard surveyImage={img1} surveyTitle={"Shorts"} surveyNext={'/men/colors'} passedFunction={this.selectShorts}/>
          <SurveyCard surveyImage={img2} surveyTitle={"Pants"} surveyNext={'/men/colors'} passedFunction={this.selectPants}/>
        </CardDeck>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
        pantsType: state.surveyReducer.pantsType
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (MensPants);
