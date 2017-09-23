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
                <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/search' component={SearchForm} />
                    <Route exact path='/singleAnimal' component={SingleAnimal} />
                    <Route exact path='/addAnimal' component={AddAnimalForm} />
                    <Redirect to='/' />
                </Switch>
                    <button><Link to="/search">Adopt me!</Link></button>
                </main>
            </div>
            )
        }
    }
}

export default Home;