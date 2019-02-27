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
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';

class SurveyMensWomens extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectMens = this.selectMens.bind(this);
    this.selectWomens = this.selectWomens.bind(this);
  }

  selectMens() {
      this.props.actions.selectGender(surveyConstants.mens);
  }

  selectWomens() {
      this.props.actions.selectGender(surveyConstants.womens);
  }


  render () {

    console.log(this.props.gender);

    return (
      <div className="survey survey2">
        <h1 onClick={(e) => this.selectGender(e, 'mens')}>Choose a Department</h1>
        <CardDeck className="carddeck carddeck2">
          <SurveyCard surveyImage={womensImg} surveyTitle={"Womens"} surveyNext={'/women/occasion'} passedFunction={this.selectWomens}/>
          <SurveyCard surveyImage={mensImg} surveyTitle={"Mens"} surveyNext={'/men/occasion'} passedFunction={this.selectMens}/>
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
