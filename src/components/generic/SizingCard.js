import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
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
        this.toggle = this.toggle.bind(this);
        this.state = {
            item: null,
            dropdownOpen: false

        };

    }


    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    componentWillMount() {
        var item;
        item = this.props.item;

        this.setState({
            item: this.state.item,
        });

    }

    render () {
        var keyValue = this.props.keyValue;
        var item = this.props.item;
        var itemImage = item.images[0].url;
        var itemName = item.name;
        var itemPrice = item.price.formattedValue;
        var itemSizesObject = item.variantSizes;
        var itemSizes = [];

        var i;
        for (i = 0; i < itemSizesObject.length; i++) {
            itemSizes.push(<option>{itemSizesObject[i].filterCode}</option>)
        }

        return (
          <Col className="sizingCards">
              <Form>
                  <FormGroup>
                      <Label for="exampleSelect">Choose a size</Label>
                      <Input type="select" name="select" id="exampleSelect">
                          {itemSizes}
                      </Input>
                  </FormGroup>
              </Form>
              <Card key={keyValue} className="cardSize" onClick={this.getNewItem}>
                  <CardImg top width="100%" src={itemImage} alt="Card image cap" />
                  <CardBody>
                      <CardTitle>{itemName}</CardTitle>
                      <CardText>{itemPrice}</CardText>
                  </CardBody>
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

export default connect(mapStateToProps, mapDispatchToProps) (RecommendationCard);
