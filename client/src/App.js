import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import SearchForm from './components/SearchForm';
import './App.css';
import SingleAnimal from './components/SingleAnimal';
import AddAnimalForm from './components/AddAnimalForm';
<<<<<<< HEAD
import AdoptAnimal from './components/AdoptAnimal'

=======
import EditAnimalForm from './components/EditAnimalForm';
>>>>>>> 769ad506b78bf5773395369ab704958ac9e946a9
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import RegisterForm from './components/partials/RegisterForm';

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
<<<<<<< HEAD
            <Route exact path='/animals/:id/adopted' component={AdoptAnimal} />
            <Route exact path='/user/register' component={RegisterForm} />
            <Redirect to='/' />
=======
            <Route exact path='/editAnimal/:id' component={EditAnimalForm} />
            <Redirect to='/'/>
>>>>>>> 769ad506b78bf5773395369ab704958ac9e946a9
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
