import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from 'reactstrap';
import SurveyCard from '../generic/ThreeSurveyCard.js';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import _ from 'lodash';
import * as surveyActions from '../../actions/surveyActions';
import * as surveyConstants from '../../constants/survey-constants';
import * as imageConstants from '../../constants/womens-colors-const.js';

class WomensColors extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

    this.selectBright = this.selectBright.bind(this);
    this.selectDark = this.selectDark.bind(this);
    this.selectPattern = this.selectPattern.bind(this);
    this.selectImgs = this.selectImgs.bind(this);
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

  selectImgs() {
    var img1;
    var img2;
    var img3;
      if (this.props.womensCollection === surveyConstants.party) {
        if (this.props.womenClothingType === surveyConstants.one_piece) {
          img1 = imageConstants.partyone1;
          img2 = imageConstants.partyone2;
          img3 = imageConstants.partyone3;
        }
        else if (this.props.womenClothingType == surveyConstants.two_piece) {
          img1 = imageConstants.partytwo1;
          img2 = imageConstants.partytwo2;
          img3 = imageConstants.partytwo3;
        }
      }
      else if (this.props.womensCollection === surveyConstants.modern_classic) {
        if (this.props.womenClothingType === surveyConstants.one_piece) {
          img1 = imageConstants.modone1;
          img2 = imageConstants.modone2;
          img3 = imageConstants.modone3;
        }
        else if (this.props.womenClothingType == surveyConstants.two_piece) {
          img1 = imageConstants.modtwo1;
          img2 = imageConstants.modtwo2;
          img3 = imageConstants.modtwo3;
        }
      }
      else if (this.props.womensCollection === surveyConstants.conscious) {
        if (this.props.womenClothingType === surveyConstants.one_piece) {
          img1 = imageConstants.conone1;
          img2 = imageConstants.conone2;
          img3 = imageConstants.conone3;
        }
        else if (this.props.womenClothingType == surveyConstants.two_piece) {
          img1 = imageConstants.contwo1;
          img2 = imageConstants.contwo2;
          img3 = imageConstants.contwo3;
        }
      }
      else if (this.props.womensCollection === surveyConstants.premium_quality) {
        if (this.props.womenClothingType === surveyConstants.one_piece) {
          img1 = imageConstants.premone1;
          img2 = imageConstants.premone2;
          img3 = imageConstants.premone3;
        }
        else if (this.props.womenClothingType == surveyConstants.two_piece) {
          img1 = imageConstants.premtwo1;
          img2 = imageConstants.premtwo2;
          img3 = imageConstants.premtwo3;
        }
      }
      else if (this.props.womensCollection === surveyConstants.trend) {
        if (this.props.womenClothingType === surveyConstants.one_piece) {
          img1 = imageConstants.trendone1;
          img2 = imageConstants.trendone2;
          img3 = imageConstants.trendone3;
        }
        else if (this.props.womenClothingType == surveyConstants.two_piece) {
          img1 = imageConstants.trendtwo1;
          img2 = imageConstants.trendtwo2;
          img3 = imageConstants.trendtwo3;
        }
      }
      else if (this.props.womensCollection === surveyConstants.divided) {
        if (this.props.womenClothingType === surveyConstants.one_piece) {
          img1 = imageConstants.divone1;
          img2 = imageConstants.divone2;
          img3 = imageConstants.divone3;
        }
        else if (this.props.womenClothingType == surveyConstants.two_piece) {
          img1 = imageConstants.divtwo1;
          img2 = imageConstants.divtwo2;
          img3 = imageConstants.divtwo3;
        }
      }
      else if (this.props.womensCollection === surveyConstants.casual) {
        if (this.props.womenClothingType === surveyConstants.one_piece) {
          img1 = imageConstants.casone1;
          img2 = imageConstants.casone2;
          img3 = imageConstants.casone3;
        }
        else if (this.props.womenClothingType == surveyConstants.two_piece) {
          img1 = imageConstants.castwo1;
          img2 = imageConstants.castwo2;
          img3 = imageConstants.castwo3;
        }
      }
      else {
        img1 = imageConstants.placehold1;
        img2 = imageConstants.placehold2;
        img3 = imageConstants.placehold3;
      }

      return [img1, img2, img3];
  }

  render () {
    //returns array of three
    var imgs = this.selectImgs();

    return (
      <Container className="survey survey3">
      <h1>What do you prefer?</h1>
      <Row>

        <CardDeck className="carddeck carddeck3">
          <SurveyCard surveyImage={imgs[0]} surveyTitle={"Light Colors"} surveyNext={'/recommend'} passedFunction={this.selectBright}/>
          <SurveyCard surveyImage={imgs[1]} surveyTitle={"Dark Colors"} surveyNext={'/recommend'} passedFunction={this.selectDark}/>
          <SurveyCard surveyImage={imgs[2]} surveyTitle={"Patterns"}surveyNext={'/recommend'} passedFunction={this.selectPattern}/>
        </CardDeck>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    womensCollection: state.surveyReducer.womensCollection,
    womenClothingType: state.surveyReducer.womenClothingType,
    color: state.surveyReducer.color
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (WomensColors);
