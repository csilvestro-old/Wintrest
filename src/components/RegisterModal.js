import React from 'react';
import LoginHeader from './login/LoginHeader'
import Button from './button/Button'
import MediaButton from './MediaButton';
import Tos from './Tos';
import { NavLink } from 'react-router-dom';
import LoginButton from './login/LoginButton';

const RegisterModal = () => {
    return (
        <>
            <LoginButton />
            <div style={styles.cotainer}>
                <LoginHeader />
                <form style={styles.form}>
                    <input style={styles.input} type='email' placeholder='Email' />
                    <input style={styles.input} type='password' placeholder='Password' />
                    <input style={styles.input} type='number' placeholder='Age' />
                    <Button backgroundColor='#FF3333' route='/Dashboard' type='Submit' text='Continue' />
                </form>
                <p style={{fontWeight: 'bold', padding: '10px'}}>OR</p>
                <div style={styles.social}>
                    <MediaButton backgroundColor='#3366ff' src='../images/lovast_logo.png' text='Continue With Facebook' />
                    <MediaButton backgroundColor='#3366ff' src='' text='Continue With Google' />
                    <Tos />
                </div>
                <p style={styles.login}>Already a member? <NavLink to="/Signin" style={{ color: 'lightgray' }}>Log in</NavLink></p>
                <p style={styles.business}>Create a business account</p>
            </div>
        </>
    )
}
export default RegisterModal

const styles = {
    cotainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        hieght: '30%',
        width: '25%',
        justifyContent: 'center',
        borderRadius: '4px',
        margin: 'auto',
    },
    form: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        width: '100%',
        marginBottom: '10px',
        padding: '5px 7px',
        border: '1px solid lightgray',
        borderRadius: '4px'
    },
    social: {
        width: '60%'
    },
    login: {
        fontSize: '10px',
        marginBottom: '20px'
    },
    business: {
        fontWeight: 'bold',
        marginBottom: '20px'
    }
}