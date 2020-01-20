import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars, FaGripVertical } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

//Line 9 can be made into an import.
const NavPin = () => {
    return (
        <>
            <nav style={styles.container}>
                <NavLink to="/Dashboard" style={styles.links}>Boards</NavLink>
                <NavLink to="/Following" style={styles.links}>Pins</NavLink>
                <NavLink to="/Following" style={styles.links}>Tries</NavLink>
                <NavLink to="/Following" style={styles.links}>Following</NavLink>
                <NavLink to="/Following" style={styles.links}>Topics</NavLink>
                <NavLink to="/" style={styles.linkIcons}><FiGrid /></NavLink>
                <NavLink to="/UserProfile" style={styles.linkIcons}><FaGripVertical /></NavLink>
                <NavLink to="/Signin" style={styles.linkIcons}><FaBars /></NavLink>
                <NavLink to="/Signin" style={styles.linkIcons}>
                    <select>
                        <option>Last saved to</option>
                    </select>
                </NavLink>
            </nav>
        </>
    )
}
export default NavPin

const styles ={
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        //borderBottom: '1px solid grey',
        padding: 10
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
    }
}