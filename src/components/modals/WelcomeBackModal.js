import React from 'react';
import Button from '../button/Button';

const WelcomeBack = () =>{
    return(
        <div style={styles.container}>
            <img  width='30px' height='30px' src={require('../../images/pinterest.png')} alt="logo"/>
            <p style={styles.para}>Welcome back, PRW!</p>
            <img  height="110px" src={require('../../images/Screenshot at Jan 08 14-07-34.png')} alt=""/>
            <p>prwlecture@gmail.com</p>
            <input style={styles.input} name='password' placeholder='Password' type='password' />
            <Button text='Login' backgroundColor='red' route='/Dashboard' />
        </div>
    )
}

export default WelcomeBack;

const styles={
    container:{
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center',
        padding:'15px',
        margin:'auto',
        borderRadius:'10px',
        color:'black'
    },
    para:{
        fontSize:'1.5em',
        fontWeight:'500'
    },
    input: {
        border: '1px solid lightgray',
        padding: '4px',
        borderRadius: '3px',
        margin: '.5rem',
        width: '100%'
    },

}