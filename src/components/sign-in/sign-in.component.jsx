import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name] : value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Já sou cadastrado</h2>
                <span>Entrar com email e senha</span>

                <form onSubmit={this.handleSubmit}>        
                    <FormInput 
                        name="email" 
                        tyle="email"
                        value={this.state.email} 
                        handleChange={this.handleChange}  
                        label="email"
                        required
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="senha"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Entrar</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Entrar com o Google</CustomButton>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default SignIn;