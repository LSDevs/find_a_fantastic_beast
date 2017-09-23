import React from 'react';

class SignInForm extends Component {
    constructor(props){
        super(props);

        // Set the state
        this.state = {
            username: undefined,
            password: undefined,
        };
        this.handleSumbit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

module.exports = SignInForm;