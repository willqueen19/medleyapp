import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/generic.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return (
            <div>
                <Navbar style={{'background-color': 'black' }} color="light" light expand="md">
                    <NavbarBrand style={{'color': 'white'}} href="/">Medley Logo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                </Navbar>
            </div>
        )
    }

}

export default Header;