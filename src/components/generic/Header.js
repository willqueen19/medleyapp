import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/generic.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import logo from '../../assets/hm-logo.png';
import medleyLogo from '../../assets/Final Logo.png';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            redirect: null,
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            redirect: 'medley/'
        });
    }

    render () {

        if (this.state.redirect != null) {
            return <Redirect push to={this.state.redirect}/>
        }

        // TODO: reroute needs to be added

        return (
            <div>
                <Navbar expand="md">
                    {<NavbarBrand><img src={medleyLogo}/></NavbarBrand>}
                    <NavbarToggler onClick={this.toggle} />
                    <img className="ml-auto" src={logo} alt="Logo" />
                </Navbar>
            </div>
        )
    }
}

export default Header;
