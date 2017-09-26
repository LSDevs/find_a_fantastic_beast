import React, {Component} from 'react';
import axios from 'axios';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputEmail: '',
      inputPassword: '',
      user: {},
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

  }
  handleInputChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(name)
    console.log(value)
    console.log(this.state)

    this.setState({
      [name]: value,
    });
  }

handleRegister(event) {
  event.preventDefault();
    //event.target.content = '';

    axios.post('http://localhost:3001/user', {
      name: this.state.inputName,
      email: this.state.inputEmail,
      password: this.state.inputPassword,
    })
    .then(res => {
      console.log(res.data.data.user);

        const newUser = {
          name: this.state.inputName,
          email: this.state.inputEmail,
        }

        this.setState(prevState => {

          return {
            user: newUser,
          }
        })
      }).catch(err => console.log(err));
    }
    render() {
    return(
      <div className='RegisterBoxContainer'>
        <h1> REGISTER</h1>
        <div className="RegisterBox">
          <form
            className='addUser'
            onSubmit={this.handleRegister}
          >
      <div className='inputField'>
          <p className='inputP'>
            <input
            className="input"  
              type='text'
              value={this.state.name}
              name='inputName'
              placeholder='Name'
              onChange={this.handleInputChange}
            />
          </p>
        </div>
          <br/>
        <div className='inputField'>
          <p className='inputP'>
                <input
                className="input"
                  type='text'
                  value={this.state.email}
                  name='inputEmail'
                  placeholder='Email'
                  onChange={this.handleInputChange}
                />
            </p>
        </div>
          <br/>
        <div className='inputField'>
          <p className='inputP'>
            <input
              className="input"
              type='password'
              value={this.state.password}
              name='inputPassword'
              placeholder='Password'
              onChange={this.handleInputChange}
            />
          </p>
        </div>
          <br/>
        <div className='controlField'>
          <p className='control'>
            <button className="inputBtn" id="submit">REGISTER</button>
          </p>
        </div>
      </form>
    </div>
  </div>
)}}




export default RegisterForm;
