import React from 'react'

const Tos = () => {
    return (
        <div style={styles.container}>
            <p style={styles.ptag}><span style={styles.tos}>By continuing you agree to Winterest's</span> Terms of Service Privacy Policy</p>
        </div>
    )
}
export default Tos

const styles = {
    container: {
        marginBottom: '10px',
    },
    ptag: {
        fontSize: '10px',
        textAlign: 'center'
    },
    tos: {
        color: 'lightgray'
    }
}