import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';
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
        var items = this.props.items;
        var item;
        if (items.length === 1) {
            item = items[0];
        } else {
            item = items[this.getRandomInt(items.length)]
        }

        this.setState({
            items: items,
            item: item
        })
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    getNewItem() {
        var items = this.state.items;
        var item;
        if (items.length === 1) {
            item = items[0];
        } else {
            item = items[this.getRandomInt(items.length)];
        }

        this.setState({
            item: item
        })
    };


  render () {

      var item = this.state.item;
      var itemImage = item.images[0].url;
      var itemName = item.name;
      var itemPrice = item.price.formattedValue;

      return (

          <div>
              <Card key={this.props.keyValue} className="cardRec" onClick={this.getNewItem}>
                  <CardImg top width="100%" src={itemImage} alt="Card image cap" />
                  <CardBody>
                      <CardTitle>{itemName}</CardTitle>
                      <CardText>{itemPrice}</CardText>
                  </CardBody>
              </Card>
          </div>

    )
  }
}

export default RecommendationCard;

