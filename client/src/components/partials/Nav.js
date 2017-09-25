import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
<<<<<<< HEAD
                    <li><Link to='#'>About</Link></li>
                    <li><Link to='/addAnimal'>Add animal</Link></li>
=======
                    <li><Link to='/'>About</Link></li>
>>>>>>> be99f44595d455e0b360169206d6dbf7b579b0ad
                    <li><Link to='#'>SignIn</Link></li>
                    <li><Link to='#'>Register</Link></li>
                    </ul>
                </nav>
        );
    };
}

export default Nav;
