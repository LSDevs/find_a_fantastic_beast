import React, { Component} from 'react';

import SearchForm from './SearchForm';

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
                <SearchForm />
            </div>
            )
        }
    }
}

export default Home;
