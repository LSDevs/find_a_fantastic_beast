import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
<<<<<<< HEAD
=======

import './App.css';
import RegisterForm from './components/RegisterForm';
>>>>>>> 6c8a73608167aae64dc228b461c59274042dd824
import Home from './components/Home';
import SearchForm from './components/SearchForm';
import SingleAnimal from './components/SingleAnimal';
import AddAnimalForm from './components/AddAnimalForm';
import AdoptAnimal from './components/AdoptAnimal'

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
            <Route exact path='/editAnimal/:id' component={EditAnimalForm} />
            <Route exact path='/animals/:id/adopted' component={AdoptAnimal} />
            <Route exact path='/addAnimal' component={AddAnimalForm} />
            <Route exact path='/user/register' component={RegisterForm} />
            <Route exact path='/user/login' component={AdoptAnimal} />
            <Redirect to='/'/>
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
