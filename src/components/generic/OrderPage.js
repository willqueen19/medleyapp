import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {bindActionCreators} from "redux";
import * as recommendationActions from "../../actions/recommendActions";
import * as surveyActions from '../../actions/surveyActions';
import {connect} from "react-redux";


class OrderPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.resetApp = this.resetApp.bind(this);
    }

    resetApp() {
        this.props.actions.resetSurvey();
        this.props.actions.resetRecommendation();
    }

    render() {
        var hour = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        var orderNum = String(new Date().getHours()) + String(new Date().getMinutes())+ String(new Date().getSeconds());
        var currentOutfit = this.props.currentOutfit;

        var itemNames = [];
        for (var i = 0; i < currentOutfit.length; i++) {
            if (currentOutfit[i] != null) {
                itemNames.push(<h2 style={{color: 'pink'}}>{currentOutfit[i].name}</h2>);
            }
        }

        // TODO: make sure this works with keyboard return button
        /*
        <Form>
             <FormGroup>
                 <Label for="firstName" className="mr-sm-2">Tell a store associate your order number or enter your name!</Label>
                    <Input type="text" name="name" id="firstName" placeholder="Enter your name" />
             </FormGroup>
         </Form>
         */

        return(
            <Container>
                <Row>
                    <Col>
                        <div className="order">
                            <h1 className="display-3">All Set!</h1>
                            <h3 className="lead">Your clothes will be in the dressing room, ready for you to try on in a few minutes.</h3>
                            {itemNames}
                            <h1>Order #{orderNum}</h1>
                            <Link className="submit" to="/">
                                <Button onClick={this.resetApp} className="submit">Finish  <i class="fas fa-check"></i></Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className="rowtryOn">
                    <Col sm={{size: 2, offset: 5}}>
                        <Link className="tryOn" to='/recommend/'>
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
        currentOutfit: state.recommendReducer.currentOutfit
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(recommendationActions, surveyActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (OrderPage);
