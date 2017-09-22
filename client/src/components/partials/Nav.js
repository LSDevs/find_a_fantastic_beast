import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Components {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='#'>About</Link></li>
                    <li><Link to='#'>SignIn</Link></li>
                    <li><Link to='#'>Register</Link></li>
                    </ul>
                </nav>
        );
    };
}

export default Nav;