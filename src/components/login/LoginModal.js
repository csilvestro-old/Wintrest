import React from 'react';
//import Button from '../components/button/Button'
import LoginHeader from './LoginHeader';

const LoginModal = props => {
    return (
        <div style={styles.cotainer}>
            <LoginHeader />
            <form>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
            </form>
        </div>
    )
}
export default LoginModal

const styles = {
    cotainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        hieght: '30%',
        width: '30%',
        justifyContent: 'center',
        borderRadius: '4px',
        margin: 'auto'
    },
}