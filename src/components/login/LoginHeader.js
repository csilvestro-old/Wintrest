import React from 'react';

const LoginHeader = () => {
    return (
        <>
            <img style={styles.img} src={require('../../images/pinterest.png')} alt='Test' />
            <h3 style={styles.mainHeader}>Welcome to Winterest</h3>
            <p style={styles.ptag}>Find new ideas to try!</p>
        </>
    )
}
export default LoginHeader

const styles = {
    img: {
        height: '40px',
        marginTop: '20px'
    },
    mainHeader: {
        fontSize: '20px',
        marginBottom: '8px'
    },
    ptag: {
        marginBottom: '20px'
    }
}