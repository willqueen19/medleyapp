import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, CardDeck } from "reactstrap";
import SizingCard from './SizingCard.js';
import {bindActionCreators} from "redux";
import * as recommendationActions from "../../actions/recommendActions";
import {connect} from "react-redux";
import * as surveyConstants from '../../constants/survey-constants';
import {shirt} from "../../constants/survey-constants";
import Spinner from "reactstrap/es/Spinner";
import {trend} from "../../constants/survey-constants";

import _ from 'lodash';
import Header from "./Header";


class Sizing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentOutfit: []
        };
    }

    componentWillMount() {

    }

    render () {
        var currentOutfit = this.props.currentOutfit;
        // var cards = [];
        // var i;
        // if (currentOutfit && currentOutfit.length > 0) {
        //     for (i = 0; i < currentOutfit.length; i++) {
        //         var item = currentOutfit[i];
        //         cards.push(<h2>{item.name}</h2>);
        //     }
        //     var allItems = <div>{cards}</div>
        // }

        // return(
        //     <div className="sizing" style={{'color': 'white'}}>
        //         <h1>Here are your items:</h1>
        //         {allItems}
        //         <Link to="/order/">
        //             <Button className="tryOn">Try on these items</Button>
        //         </Link>
        //     </div>
        //
        // )

        var cardDeck;

        var cards = [];
        var i;
        for (i = 0; i < currentOutfit.length; i++) {
            cards.push(<SizingCard itemKey={i} item={currentOutfit[i]}/>);
        }
        cardDeck = <CardDeck className='carddeck carddeckSize'>{cards}</CardDeck>

        console.log('CURRENT OUTFIT', this.props.currentOutfit);

        return(
          <Container className="sizingPage">
              <Row className="sizing">
                  {cardDeck}
              </Row>
              <Link to="/order/">
                  <Button className="tryOn">Try on these items</Button>
              </Link>
          </Container>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        currentOutfit: state.recommendReducer.currentOutfit
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(recommendationActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Sizing);
