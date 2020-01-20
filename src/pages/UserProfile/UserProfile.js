import React, { Component } from 'react';
import DashHeader from '../../components/DashHeader';
import StinkyScotty from '../../images/scott.png'
// import UserForm from './UserForm';
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import NavPin from '../../components/nav/NavPin'

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
                <div style={styles.btns}>
                    <IoMdAdd />
                    <MdEdit />
                    <FiShare />
                </div>
                <div style={styles.userInfo}>
                    <div>
                        <h1>PRW Lecture</h1>
                        <h2>0 Followers • 11 Following</h2>
                    </div>
                    <div style={styles.userAvatar}>
                        <img style={{borderRadius: '50%'}} src={StinkyScotty} alt='' />
                    </div>
                </div>
                <section>
                    <NavPin />
                </section>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%'
    }, 
    btns:{
        fontSize: '2em',
        marginLeft: '10%',
        paddingTop: '2%'
    },
    userAvatar: {
        
    }
}