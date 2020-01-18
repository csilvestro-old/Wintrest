import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillMessage } from "react-icons/ai"
import { IoIosNotifications, IoIosMore } from "react-icons/io"
//Line 9 can be made into an import.
const DashHeader = props => {
    return (
        <>
            <header style={styles.container}>
                <img  width='35px' height='35px' src={require('../images/pinterest.png')} alt="Welcome to Wintrest"/>
                <form style={styles.form}>
                    <input type='text' placeholder="Search..." style={styles.input} />
                </form>
                <nav style={styles.nav}>
                    <NavLink to="/Dashboard" style={styles.links}>Home</NavLink>
                    <NavLink to="/Following" style={styles.links}>Following</NavLink>
                    <NavLink to="/UserProfile" style={styles.links}><img style={{ borderRadius: '50%', height: '50px'}} src={props.avatar} alt='' /></NavLink>
                    <NavLink to="/" style={Object.assign({}, styles.linkBorder, styles.linkIcons)}><AiFillMessage /></NavLink>
                    <NavLink to="/" style={styles.linkIcons}><IoIosNotifications /></NavLink>
                    <NavLink to="/Signin" style={styles.linkIcons}><IoIosMore /></NavLink>
                </nav>
            </header>
        </>
    )
}
export default DashHeader

const styles ={
    container:{
        display:'flex',
        flexDirection:'row',
        borderBottom: '1px solid grey',
        padding: 10
    },
    form: {
        width: '58%',
        paddingLeft: 30
    },
    input: {
        width: '100%',
        height: 35,
        borderRadius: 5,
        backgroundColor: 'lightgrey'
    },
    nav: {
        marginLeft: 'auto',
        alignItems: 'center',
        fontSize: '1.1em',
        fontWeight: 'bold'
    },
    links: {
        paddingLeft: 20,
        paddingRight: 20
    },
    linkIcons: {
        fontSize: '1.65em',
        paddingLeft: 15,
        paddingRight: 15
    },
    linkBorder: {
        borderLeft: '1px solid grey',
    }
}