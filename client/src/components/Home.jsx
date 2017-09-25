import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }
    render() {
    if(this.state.isLoading) {
    console.log("Loading is true")
        return (
            <div className='landingPage'>
                <button><Link to='/search'>Find your shelter</Link></button>
            </div>
            )
        }
    }
}

export default Home;
