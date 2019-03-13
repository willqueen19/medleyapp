import React, { Component } from 'react';

import './css/generic.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import back-button from'../../assets/Symbol-back-button.png';

class Footer extends Component {

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
                    <img className="ml-auto" src={BackArrow} alt="Logo" />
                </Navbar>
            </div>
        )
    }
}

export default Header;
