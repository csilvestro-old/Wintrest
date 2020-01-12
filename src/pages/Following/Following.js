import React, { Component } from 'react';
import DashHeader from '../../components/DashHeader';

class Following extends Component{
    render(){
        return(
            <div style={styles.container}>
                <DashHeader />
                <div>main content</div>
            </div>
        )
    }
}

export default Following;

const styles ={
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
    }
}