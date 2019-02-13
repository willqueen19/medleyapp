import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/generic.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import logo from '../../assets/hm-logo.png';

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
                <Navbar expand="md">
                    {<NavbarBrand href="/">Medley</NavbarBrand>}
                    <NavbarToggler onClick={this.toggle} />
                    <img className="ml-auto" src={logo} alt="Logo" />
                </Navbar>
            </div>
        )
    }
}

export default Header;
