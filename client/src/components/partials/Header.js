import React, { Component } from 'react';

import Nav from './Nav';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Fantastic Beasts</h1>
                <Nav />
                </header>
        )
    }
}

export default Header;

