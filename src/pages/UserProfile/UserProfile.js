import React, { Component } from 'react';
import DashHeader from '../../components/DashHeader';
import StinkyScotty from '../../images/scott.png'
import UserForm from './UserForm';


class UserProfile extends Component{
    state = {
        user: {
            avatar: require('../../images/scott.png'),
            name: 'StinkyScotty'
        },
        inputs:'',
    }
    onChange = (e) => {
        this.setState({inputs: [e.target.value]})
    }
    submitBoard = (e) => {
        console.log('Briffon is an ERROR!')
    }
    render(){
        return(
            <div style={styles.container}>
                <DashHeader avatar={StinkyScotty}/>
                <div>
                    <button>Add</button>
                    
                    <button>Edit</button>
                    <button>Share</button>
                </div>
                <div style={styles.userInfo}>
                    <div>
                        <h1>PRW Lecture</h1>
                        <h2>0 Followers • 11 Following</h2>
                    </div>
                    <div>
                        <img style={{borderRadius: '50%'}} src={StinkyScotty} alt='' />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;

const styles ={
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
    },
    userInfo: {
        width: '80%',
        margin: '0 auto',
        backgroundColor: 'lightGray',
        display: 'flex'
    }
}