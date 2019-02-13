import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';

class MensStyles extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    //three card

    render () {
        return (
            <div>
                <CardDeck>

                </CardDeck>
            </div>
        )
    }
}

export default MensStyles;