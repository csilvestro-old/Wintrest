import React from 'react';
import { NavLink } from 'react-router-dom'
import './Button.css'

const Button = (props) => {
    return (
        <>
            <button type={props.type} style={{ backgroundColor: props.backgroundColor, padding: '5px 7px', borderRadius: '4px', width: '100%' }}>
                <NavLink style={styles.container} to={props.route}>
                    {props.text}
                </NavLink>
            </button>
        </>
    )
}
export default Button

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0',
        textAlign: 'center',
        padding: 0,
        color: 'white',
        fontWeight: 'bold'
    }
}
