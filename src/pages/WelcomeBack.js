import React, { Component } from 'react';
import WelcomeBack from '../components/modals/WelcomeBackModal';

class SignIn extends Component{
    render(){
        return(
            <div style={styles.container}>
                <WelcomeBack/>
            </div>
        )
    }

}

export default SignIn;

const styles ={
    container:{
        color:'red',
        display:'flex',
        backgroundColor:'black',
        flexDirection:'row',
        alignItems:'center',
        height:'100vh',
        opacity: '0.8',
        
    }
}