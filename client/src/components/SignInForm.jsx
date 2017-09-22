import React from 'react';

class SignInForm extends Component {
    constructor(){
        super();
        this.state = {
            userInputData: [],
            userInputEmail: '',
            userInputName: '',
        }

    } 
}

handleInputEmailChange(event) {
    this.setState({
        userInputEmail: event.target.value
    });
}

handleInputNameChange(event) {
    this.setState({
        userInputName: event.target.value
    });
}
       
handleUserDataSubmit(event) {
    event.preventDefault();
    event.target.email = ''
    event.target.name = '';

}

render() {
    console.log('App rendering, this.state');
    return (
        <Header />
    )
}
       <form 
        className='signInForm'
        onSubmit={props.handleUserDataSignIn}
        >
        <input 
        type='text'
        value={props.inputEmail}
        name='email'
        placeholder='Email'
        onChange={props.handleInputEmail}
        />
        <br/>
        <input
            type='text'
            value={props.inputName}
            name='name'
            placeholder='props.handleInputName' 
        />
        <br/>
        <button type='Submit' value='submit'>Sign in</button>
        </form>
    


export default SignInForm;