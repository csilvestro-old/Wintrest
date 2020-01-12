import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginButton = () => {
    return (
        <div style={{position: 'relative', left: '20px', top: '20px'}}>
            <button style={styles.btn}><NavLink style={{ color: 'black' }} to='/Signin'>Log in</NavLink></button>
        </div>
    )
}
export default LoginButton
const styles= {
    btn: {
        backgroundColor: 'white',
        positon: 'absolute',
        color: 'black',
        padding: '7px 15px',
        borderRadius: '4px',
        fontWeight: 'bold',
    }
}