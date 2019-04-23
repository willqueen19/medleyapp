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
import * as recommendActions from '../../actions/recommendActions'
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
    this.reset = this.reset.bind(this);
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
      else if (this.props.womensCollection === surveyConstants.logg) {
        //console.log('got to logg in womens type!!!')
        img1 = imageConstants.cas1;
        img2 = imageConstants.cas2;
      }
      else {
        img1 = imageConstants.placehold1;
        img2 = imageConstants.placehold2;
      }
      return [img1, img2];
  }

  reset() {
    this.props.actions.resetRecommendation();
  }


  render () {
    //console.log('womens collection', this.props.womensCollection);
    //returns array of two
    var imgs = this.selectImgs();

    var prevRoute;

    if ([surveyConstants.party, surveyConstants.modern_classic].includes(this.props.womensCollection)) {
      prevRoute = '/women/occasion/';
    } else if ([surveyConstants.conscious, surveyConstants.premium_quality].includes(this.props.womensCollection)) {
      prevRoute = '/women/values/';
    } else if ([surveyConstants.trend, surveyConstants.divided, surveyConstants.logg].includes(this.props.womensCollection)) {
      prevRoute = '/women/style';
    }

    return (
      <Container className="survey survey2">
        <h1>What do you prefer?</h1>
        <Row>
          <CardDeck className="carddeck carddeck2">
            <Col sm = "2" xs = "0"></Col>
            <SurveyCard surveyImage={imgs[0]} surveyTitle={"Dresses and Jumpsuits"} surveyNext={'/women/color'} passedFunction={this.selectOnePiece}/>
            <SurveyCard surveyImage={imgs[1]} surveyTitle={"Tops and Bottoms"} surveyNext={'/women/color'} passedFunction={this.selectTwoPiece}/>
          </CardDeck>
        </Row>
        <Row className="rowtryOn">
          <Col sm={{size: 2, offset: 5}}>
            <Link className="tryOn" to={prevRoute}>
              <Button onClick={this.reset} className="back"><i className="fas fa-arrow-left"></i> Back</Button>
            </Link>
          </Col>
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
        actions: bindActionCreators(Object.assign({}, surveyActions, recommendActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (WomensType);
