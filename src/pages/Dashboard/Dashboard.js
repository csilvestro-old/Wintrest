import React, { Component } from 'react';
import DashHeader from '../../components/DashHeader';

class Dashboard extends Component{
    render(){
        return(
            <div style={styles.container}>
                <DashHeader />
                <div>main content</div>
            </div>
        )
    }
}

export default Dashboard;

const styles ={
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
    }
}