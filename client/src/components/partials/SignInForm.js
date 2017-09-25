import React, {Component} from 'react';

class SignInForm extends Component {
  constructor(){
    super();
// Set the state
    this.state = {
// -----> do we have to set it undefined, as well?
// name: undefined,
      username: undefined,
      password: undefined,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        // send the data to the parent
        this.props.handleLoginForm(this.state);
    }
    render() {
        return (
            <div className="loginBox">
                <form onSubmit={this.handleSubmit}>
                    <div className="inputField">
                        <p className='inputP'>
                            <input
                            name="username"
                            className="input"
                            type="email"
                            placeholder="Email"
                            onChange={this.handleInputChange}
                            />
                        </p>
                    </div>
                    <div className="inputField">
                        <p className='inputP'>
                            <input
                            name="password"
                            className="input"
                            type="password"
                            placeholder="Password"
                            onChange={this.handleInputChange}
                            />
                        </p>
                    </div>
                    <div className="controlField">
                        <p className="control">
                            <button className="inputBtn">
                                Login
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInForm;
