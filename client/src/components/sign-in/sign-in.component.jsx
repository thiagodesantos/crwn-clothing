import React, { useState } from 'react';
import { connect } from 'react-redux';


import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [ userCredentials, setCredentials ] = useState({ email: '', password: ''});
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();                
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...userCredentials, [name] : value});
    };
   
    return (
        <div className="sign-in">
            <h2>Já sou cadastrado</h2>
            <span>Entrar com email e senha</span>

            <form onSubmit={handleSubmit}>        
                <FormInput 
                    name="email" 
                    tyle="email"
                    value={email} 
                    handleChange={handleChange}  
                    label="email"
                    required
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    handleChange={handleChange}
                    label="senha"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Entrar</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Entrar com o Google</CustomButton>
                </div>                    
            </form>
        </div>
    )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);