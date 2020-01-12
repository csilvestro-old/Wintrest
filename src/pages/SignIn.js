import React, { Component } from 'react';
import LogInModal from '../components/modals/LogInModal';


class SignIn extends Component{
    render(){
        return(
            <div style={styles.container}>
                <LogInModal {...this.props}/>
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