import React, {Component} from 'react';
import axios from 'axios';

import AdoptedList from './partials/AdoptedList';
import SignInForm from './partials/SignInForm';
import TokenService from '../services/TokenService';

export default class AdoptAnimal extends Component {
  constructor() {
    super();
    this.state = {
      auth: !!TokenService.read(),
      animalId: null,
      userEmail: '',
    }
    //bindings
    this.handleLoginForm = this.handleLoginForm.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  //functions
  async handleLoginForm(formData) {
        try {
          const {data: {token}} = await axios.post('http://localhost:3001/auth', formData);
          TokenService.save(token);
          this.setState({
            auth: true,
          });

        } catch (e) {
            console.log(e);

            this.setState({
              auth: false,
            });
        }
      }
      handleLogout() {
        TokenService.destroy();
        this.setState({auth: false})
      }
      deleteAcct(ev) {
        ev.preventDefault();

        axios.delete(`http://localhost3001/user/${this.state.userEmail}`)
            .then((res) => {
                this.setState(prevState => {
                return {
                    auth: false
                }
                })
                TokenService.destroy();
            }).catch(err => console.log(err));
      }

  render() {
    if (this.state.auth) {
      return(
        <div id="adopted">
          <AdoptedList
            deleteAcct={this.deleteAcct}
            user={this.state.userEmail}
          />
        </div>
      )
    }
    return(
      <div id="login">
        <SignInForm
            handleLoginForm={this.handleLoginForm}
            handleLogout={this.handleLogout}

        />
      </div>
    )
  }
}
