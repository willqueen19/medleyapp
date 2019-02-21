import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/TwoSurveyCard.js';
import img1 from '../../assets/WTyp-1.jpeg';
import img2 from '../../assets/WTyp-2.jpeg';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';

class WomensType extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectOnePiece = this.selectOnePiece.bind(this);
    this.selectTwoPiece = this.selectTwoPiece.bind(this);
  }

  selectOnePiece() {
      this.props.actions.selectWomenClothingType(surveyConstants.one_piece);
  }

  selectTwoPiece() {
      this.props.actions.selectWomenClothingType(surveyConstants.two_piece);
  }

  render () {
    return (
      <div className="survey survey2">
        <h1>What do you prefer?</h1>
        <CardDeck className="carddeck carddeck2">
          <SurveyCard surveyImage={img1} surveyTitle={"Two piece outfits"} surveySubtitle={"Top + Bottoms"} surveyNext={'/women/color'} passedFunction={this.selectTwoPiece}/>
          <SurveyCard surveyImage={img2} surveyTitle={"One piece outfits"} surveySubtitle={"Dresses + Jumpsuits"} surveyNext={'/women/color'} passedFunction={this.selectOnePiece}/>
        </CardDeck>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
        womenType: state.surveyReducer.womenType
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (WomensType);
