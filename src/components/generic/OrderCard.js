import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {bindActionCreators} from "redux";
import * as surveyActions from "../../actions/surveyActions";
import * as recommendationActions from '../../actions/recommendActions';
import {connect} from "react-redux";
import {nonInputTypeOnVarMessage} from "graphql/validation/rules/VariablesAreInputTypes";

class OrderCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            item: null,
            cardState: true

        };

        this.getNewItem = this.getNewItem.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
        this.changeCardState = this.changeCardState.bind(this);
    }

    componentWillMount() {

    }

    render () {

        // TODO add number of items in array to card, so user has idea of the selection
        var keyValue = this.props.keyValue;
        var item = this.props.item;
        var itemImage = item.images[0].url;
        var itemName = item.name;


        return (
            <Col sm={this.props.itemWidth} className="recCards">
                    <Card key={keyValue} className="cardRec hover">
                        <CardImg top width="100%" src={itemImage} alt="Card image cap" />
                    </Card>
            </Col>
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

export default connect(mapStateToProps, mapDispatchToProps) (OrderCard);
