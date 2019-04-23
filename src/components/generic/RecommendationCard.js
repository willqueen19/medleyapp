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
import greyImage from '../../assets/gray image.png';

class RecommendationCard extends Component {

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
        });

        this.props.actions.setCurrentOutfit(item, this.props.itemKey);
    };

    changeCardState() {
        var item = this.state.item;
        this.setState({
          cardState: !this.state.cardState
        })

        //console.log('card state', this.state.cardState);

        if (this.state.cardState) {
            this.props.actions.setCurrentOutfit(null, this.props.itemKey);
        } else {
            this.props.actions.setCurrentOutfit(item, this.props.itemKey);
        }
    }

  render () {

      // TODO add number of items in array to card, so user has idea of the selection
      var keyValue = this.props.keyValue;
      var numItems = this.state.items.length;
      var item = this.state.item;
      var itemImage = item.images[0].url;
      var itemName = item.name;
      var itemPrice = item.price.formattedValue;
      var itemSizesObject = item.variantSizes;
      var itemSizes = [];
      var itemShow = this.state.cardState;
      console.log('Current Outfit', this.props.currentOutfit);

      var i;
      for (i = 0; i < itemSizesObject.length; i++) {
          itemSizes.push(<option>{itemSizesObject[i].filterCode}</option>)
      }

      var card = {

      }

      return (
          <Col sm={this.props.itemWidth} className="recCards">
              {itemShow ?
                <Card key={keyValue} className="cardRec hover">
                    <Form>
                        <FormGroup>
                            <Input type="select" name="select" id="exampleSelect" placeholder="choose size">
                                <option value="">Choose a size</option>
                                {itemSizes}
                            </Input>
                        </FormGroup>
                    </Form>
                    <CardImg top width="100%" src={itemImage} alt="Card image cap" />
                    <CardBody className="recCardBody">
                        <CardTitle>{itemName}</CardTitle>
                        <CardText>{itemPrice}</CardText>
                    </CardBody>
                    <div className="recButtons">
                        <Button className="recButton recNew" onClick={this.getNewItem}>New</Button>
                        <Button className="recButton recRem" onClick={this.changeCardState}>Remove</Button>
                    </div>
                </Card>
                :
                <Card className="cardRec">
                    <CardImg top width="100%" src={greyImage} alt="Card image cap" />
                    <CardBody className="recCardBody" stlye={{height: '100%'}}>
                        <Button className="recButton recShow" onClick={this.changeCardState}>Add Item</Button>
                    </CardBody>
                </Card>
              }
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

export default connect(mapStateToProps, mapDispatchToProps) (RecommendationCard);
