import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from './TwoSurveyCard.js';
import womensImg from '../../assets/MW-1.jpeg';
import mensImg from '../../assets/MW-2.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';

class SurveyMensWomens extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

    this.selectGender = this.selectGender.bind(this);
  }

  selectGender(event, gender) {
      this.props.actions.selectGender(gender);
      console.log(this.props.gender);
  }


  render () {
    return (
      <div className="survey survey2">
        <h1 onClick={(e) => this.selectGender(e, 'mens')}>Choose a Department</h1>
        <CardDeck className="carddeck carddeck2">
          <SurveyCard surveyImage={womensImg} surveyTitle={"Womens"} surveyNext={'/women/occasion'} onClick={(e) => this.selectGender(e, 'womens')}/>
          <SurveyCard surveyImage={mensImg} surveyTitle={"Mens"} surveyNext={'/men/occasion'} onClick={(e) => this.selectGender(e, 'mens')}/>
        </CardDeck>
      </div>
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
        actions: bindActionCreators(Object.assign(surveyActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (SurveyMensWomens);
