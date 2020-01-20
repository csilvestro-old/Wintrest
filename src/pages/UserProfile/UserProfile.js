import React, { Component } from 'react';
import DashHeader from '../../components/DashHeader';
import StinkyScotty from '../../images/scott.png'
import { IoIosAdd } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { FiShare } from 'react-icons/fi'
import Selection from '../UserProfile/Selection'
// import UserForm from './UserForm';


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
                <div style={styles.data}>
                    <div style={styles.buttons}>
                        <button style={styles.IconBack}><IoIosAdd style={styles.icon} /></button>
                        <button style={styles.IconBack}><MdEdit style={styles.icon} /></button>
                        <button style={styles.IconBack}><FiShare style={styles.icon} /></button>
                    </div>
                    <div style={styles.userContent}>
                        <div style={styles.tagInfo}>
                            <h1 style={{ fontSize: '2rem' }}>PRW Lecture</h1>
                            <h2>0 Followers • 11 Following</h2>
                        </div>
                        <div style={styles.profilePic}>
                            <img style={{borderRadius: '50%', marginLeft: 'auto', height: '100px'}} src={StinkyScotty} alt='' />
                        </div>
                    </div>
                </div>
                <Selection name={['One', 'Two', 'Three', 'Four']}/>
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
    data: {
        width: '50%',
        margin: '2rem auto 0 auto',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    tagInfo: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto 0',
        width: '40%'
    },
    profilePic: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%'
    },
    userContent: {
        display: 'flex',
    },
    IconBack: {
        backgroundColor: 'transparent'
    },
    icon: {
        height: '30px',
        width: 'auto',
        color: 'lightgray'
    }
}