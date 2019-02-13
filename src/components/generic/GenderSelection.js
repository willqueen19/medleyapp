import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';

class GenderSelection extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Men</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>
                                <Link to={"/occasion-men"}>Mens</Link>
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Women</CardTitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>
                                <Link to={"/occasion-women"}>Womens</Link></Button>
                        </CardBody>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default GenderSelection;