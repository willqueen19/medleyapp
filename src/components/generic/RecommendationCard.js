import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {bindActionCreators} from "redux";
import * as surveyActions from "../../actions/surveyActions";
import * as recommendationActions from '../../actions/recommendActions';
import {connect} from "react-redux";
import {nonInputTypeOnVarMessage} from "graphql/validation/rules/VariablesAreInputTypes";

class RecommendationCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            item: null

        };

        this.getNewItem = this.getNewItem.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
    }

    componentWillMount() {
        var item;
        if (this.props.items.length === 1) {
            item = this.props.items[0];
        } else {
            item = this.props.items[this.getRandomInt(this.props.items.length)]
        }

        this.setState({
            items: this.props.items,
            item: item
        });

        this.props.actions.setCurrentOutfit(item, this.props.itemKey);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    getNewItem() {
        var item;
        if (this.state.items.length === 1) {
            item = this.state.items[0];
        } else {
            item = this.state.items[this.getRandomInt(this.state.items.length)];
        }

        this.setState({
            item: item
        })

        this.props.actions.setCurrentOutfit(item, this.props.itemKey);
    };


    render () {

        // TODO add number of items in array to card, so user has idea of the selection

        var keyValue = this.props.keyValue;
        var item = this.state.item;
        var itemImage = item.images[0].url;
        var itemName = item.name;
        var itemPrice = item.price.formattedValue;

        var itemSizesObject = item.variantSizes;
        var itemSizes = [];
        var itemShow = this.state.cardState;

        var i;
        for (i = 0; i < itemSizesObject.length; i++) {
            itemSizes.push(<option>{itemSizesObject[i].filterCode}</option>)
        }

        return (
            <div className="recommendationCard">
                <Card key={keyValue} className="cardRec" onClick={this.getNewItem}>
                    <CardImg top width="100%" src={itemImage} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{itemName}</CardTitle>
                        <CardText>{itemPrice}</CardText>
                    </CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleSelect">Choose a size</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                {itemSizes}
                            </Input>
                        </FormGroup>
                    </Form>
                </Card>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps) (RecommendationCard);
