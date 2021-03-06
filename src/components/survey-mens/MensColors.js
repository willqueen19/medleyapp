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
import * as imageConstants from '../../constants/mens-colors-const.js';

class MensColors extends Component {

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
      if (this.props.mensCollection === surveyConstants.premium_quality) {
        if (this.props.shirtType === surveyConstants.long_sleeve) {
          img1 = imageConstants.preml1;
          img2 = imageConstants.preml2;
          img3 = imageConstants.preml3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve) {
          img1 = imageConstants.prems1;
          img2 = imageConstants.prems2;
          img3 = imageConstants.prems3;
        }
      }
      else if (this.props.mensCollection === surveyConstants.conscious) {
        if (this.props.shirtType === surveyConstants.long_sleeve) {
          img1 = imageConstants.conl1;
          img2 = imageConstants.conl2;
          img3 = imageConstants.conl3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve) {
          img1 = imageConstants.cons1;
          img2 = imageConstants.cons2;
          img3 = imageConstants.cons3;
        }
      }
      else if (this.props.mensCollection === surveyConstants.hm_men) {
        if (this.props.shirtType === surveyConstants.long_sleeve && this.props.pantsType === surveyConstants.shorts) {
          img1 = imageConstants.hmls1;
          img2 = imageConstants.hmls2;
          img3 = imageConstants.hmls3;
        }
        else if (this.props.shirtType === surveyConstants.long_sleeve && this.props.pantsType === surveyConstants.pants) {
          img1 = imageConstants.hmlp1;
          img2 = imageConstants.hmlp2;
          img3 = imageConstants.hmlp3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve && this.props.pantsType === surveyConstants.shorts) {
          img1 = imageConstants.hmss1;
          img2 = imageConstants.hmss2;
          img3 = imageConstants.hmss3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve && this.props.pantsType === surveyConstants.pants) {
          img1 = imageConstants.hmsp1;
          img2 = imageConstants.hmsp2;
          img3 = imageConstants.hmsp3;
        }
      }
      else if (this.props.mensCollection === surveyConstants.logg) {
        if (this.props.shirtType === surveyConstants.long_sleeve && this.props.pantsType === surveyConstants.shorts) {
          img1 = imageConstants.loggls1;
          img2 = imageConstants.loggls2;
          img3 = imageConstants.loggls3;
        }
        else if (this.props.shirtType === surveyConstants.long_sleeve && this.props.pantsType === surveyConstants.pants) {
          img1 = imageConstants.logglp1;
          img2 = imageConstants.logglp2;
          img3 = imageConstants.logglp3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve && this.props.pantsType === surveyConstants.shorts) {
          img1 = imageConstants.loggss1;
          img2 = imageConstants.loggss2;
          img3 = imageConstants.loggss3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve && this.props.pantsType === surveyConstants.pants) {
          img1 = imageConstants.loggsp1;
          img2 = imageConstants.loggsp2;
          img3 = imageConstants.loggsp3;
        }
      }
      else if (this.props.mensCollection === surveyConstants.basics) {
        if (this.props.shirtType === surveyConstants.long_sleeve && this.props.pantsType === surveyConstants.shorts) {
          img1 = imageConstants.basls1;
          img2 = imageConstants.basls2;
          img3 = imageConstants.basls3;
        }
        else if (this.props.shirtType === surveyConstants.long_sleeve && this.props.pantsType === surveyConstants.pants) {
          img1 = imageConstants.baslp1;
          img2 = imageConstants.baslp2;
          img3 = imageConstants.baslp3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve && this.props.pantsType === surveyConstants.shorts) {
          img1 = imageConstants.basss1;
          img2 = imageConstants.basss2;
          img3 = imageConstants.basss3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve && this.props.pantsType === surveyConstants.pants) {
          img1 = imageConstants.bassp1;
          img2 = imageConstants.bassp2;
          img3 = imageConstants.bassp3;
        }
      }
      else if (this.props.mensCollection === surveyConstants.divided) {
        if (this.props.shirtType === surveyConstants.long_sleeve && this.props.pantsType === surveyConstants.shorts) {
          img1 = imageConstants.divls1;
          img2 = imageConstants.divls2;
          img3 = imageConstants.divls3;
        }
        else if (this.props.shirtType === surveyConstants.long_sleeve && this.props.pantsType === surveyConstants.pants) {
          img1 = imageConstants.divlp1;
          img2 = imageConstants.divlp2;
          img3 = imageConstants.divlp3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve && this.props.pantsType === surveyConstants.shorts) {
          img1 = imageConstants.divss1;
          img2 = imageConstants.divss2;
          img3 = imageConstants.divss3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve && this.props.pantsType === surveyConstants.pants) {
          img1 = imageConstants.divsp1;
          img2 = imageConstants.divsp2;
          img3 = imageConstants.divsp3;
        }
      }
      else if (this.props.mensCollection === surveyConstants.modern_classic) {
        if (this.props.shirtType === surveyConstants.long_sleeve) {
          img1 = imageConstants.modl1;
          img2 = imageConstants.modl2;
          img3 = imageConstants.modl3;
        }
        else if (this.props.shirtType === surveyConstants.short_sleeve) {
          img1 = imageConstants.mods1;
          img2 = imageConstants.mods2;
          img3 = imageConstants.mods3;
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
    var imgs = this.selectImgs();

    var prevRoute;

    if ([surveyConstants.premium_quality, surveyConstants.modern_classic, surveyConstants.conscious].includes(this.props.mensCollection)) {
      prevRoute = '/men/shirt/';
    } else {
      prevRoute = '/men/pants'
    }

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
        <Row className="rowtryOn">
          <Col sm={{size: 2, offset: 5}}>
            <Link className="tryOn" to={prevRoute}>
              <Button className="back"><i className="fas fa-arrow-left"></i> Back</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    mensCollection: state.surveyReducer.mensCollection,
    shirtType: state.surveyReducer.shirtType,
    pantsType: state.surveyReducer.pantsType,
    color: state.surveyReducer.color
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MensColors);
