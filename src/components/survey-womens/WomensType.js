import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/TwoSurveyCard.js';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';
import * as imageConstants from '../../constants/womens-type-const.js';

class WomensType extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.selectOnePiece = this.selectOnePiece.bind(this);
    this.selectTwoPiece = this.selectTwoPiece.bind(this);
    this.selectImgs = this.selectImgs.bind(this);
  }

  selectOnePiece() {
      this.props.actions.selectWomenClothingType(surveyConstants.one_piece);
  }

  selectTwoPiece() {
      this.props.actions.selectWomenClothingType(surveyConstants.two_piece);
  }

  selectImgs() {
    var img1;
    var img2;
      if (this.props.womensCollection === surveyConstants.party) {
        img1 = imageConstants.party1;
        img2 = imageConstants.party2;
      }
      else if (this.props.womensCollection === surveyConstants.modern_classic) {
        img1 = imageConstants.mod1;
        img2 = imageConstants.mod2;
      }
      else if (this.props.womensCollection === surveyConstants.conscious) {
        img1 = imageConstants.con1;
        img2 = imageConstants.con2;
      }
      else if (this.props.womensCollection === surveyConstants.premium_quality) {
        img1 = imageConstants.prem1;
        img2 = imageConstants.prem2;
      }
      else if (this.props.womensCollection === surveyConstants.trend) {
        img1 = imageConstants.trend1;
        img2 = imageConstants.trend2;
      }
      else if (this.props.womensCollection === surveyConstants.divided) {
        img1 = imageConstants.div1;
        img2 = imageConstants.div2;
      }
      else if (this.props.womensCollection === surveyConstants.casual) {
        img1 = imageConstants.cas1;
        img2 = imageConstants.cas2;
      }
      else {
        img1 = imageConstants.placehold1;
        img2 = imageConstants.placehold2;
      }
      return [img1, img2];
  }

  render () {
    //returns array of two
    var imgs = this.selectImgs();

    return (
      <Container className="survey survey2">
      <Row>
        <h1>What do you prefer?</h1>
        <CardDeck className="carddeck carddeck2">
        <SurveyCard surveyImage={imgs[0]} surveyTitle={"One piece outfits"} surveySubtitle={"Dresses + Jumpsuits"} surveyNext={'/women/color'} passedFunction={this.selectOnePiece}/>
        <SurveyCard surveyImage={imgs[1]} surveyTitle={"Two piece outfits"} surveySubtitle={"Top + Bottoms"} surveyNext={'/women/color'} passedFunction={this.selectTwoPiece}/>
        </CardDeck>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
        womensCollection: state.surveyReducer.womensCollection,
        womenType: state.surveyReducer.womenType
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (WomensType);
