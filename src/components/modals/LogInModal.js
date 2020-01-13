import React, { Component } from 'react';
import Button from '../buttons/Button';
import './LogInModal.css'

class LogInModal extends Component{
    state = {
        redirect: false
    }

    setRedirect = () => {
        console.log('props', this.props);
        this.props.history.push('WelcomeBack')
    }
    setRegister= () => {
        console.log('props', this.props);
        this.props.history.push('Register')
    }

    render() {
        return(
            <>
                <div className="modal" style={styles.modal}>
                    <img src={require("../../images/pinterest.png")} alt="scotty" width="50px" hieght="50px"></img>
                    <h2>Welcome to Winterest</h2>
                    <p> Find new ideas to try</p>
                    <Button logIn={this.setRedirect} styles={styles.logIn}label="Log In"></Button>
                    <Button logIn={this.setRegister} styles={styles.register}label="Register"></Button>
                    {/* No href's use Link */}
                    <a href="google.com">Create a buisness account</a>
                </div>
            </>
        )
    }
}

export default LogInModal;

const styles = {
    logIn:{
        backgroundColor:'red',
        color:'white',
    },
    register:{
        color:'black',
        backgroundColor:'white',
    }
}