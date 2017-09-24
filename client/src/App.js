import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Home from './components/Home';
import SearchForm from './components/SearchForm';
import './App.css';
import SingleAnimal from './components/SingleAnimal';
import AddAnimalForm from './components/AddAnimalForm';
import EditAnimalForm from './components/EditAnimalForm';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={SearchForm} />
            <Route exact path='/animals/:id' component={SingleAnimal} />
            <Route exact path='/addAnimal' component={AddAnimalForm} />
            <Route exact path='/editAnimal/:id' component={EditAnimalForm} />
            <Redirect to='/' />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
