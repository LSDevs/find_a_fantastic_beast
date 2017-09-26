import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/search'>Home</Link></li>
                    <li><Link to='/addAnimal'>Add Animal</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/user/login'>SignIn</Link></li>
                    <li><Link to='/user/register'>Register</Link></li>
                    </ul>
                </nav>
        );
    };
}

export default Nav;
