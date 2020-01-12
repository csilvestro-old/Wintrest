import React from 'react'

const BottomNav = () => {
    return (
        <>
            <ul style={styles.container}>
                <li style={styles.item}>About Pinterest</li>
                <li style={styles.item}>Blog</li>
                <li style={styles.item}>Businesses</li>
                <li style={styles.item}>Terms of Service</li>
                <li style={styles.item}>Privacy Policy</li>
                <li style={styles.item}>Help</li>
                <li style={styles.item}>Iphone App</li>
                <li style={styles.item}>Adroid App</li>
                <li style={styles.item}>Users</li>
                <li style={styles.item}>Collections</li>
                <li style={styles.item}>Topics</li>
                <li style={styles.item}>Travel Collection</li>
            </ul>
        </>
    )
}
export default BottomNav

const styles = {
    container: {
        position: 'fixed',
        bottom: '0',
        textAlign: 'center',
        display: 'table',
        width: '100%',
        margin: '0 auto',
        paddingBottom: '10px'
    },
    item: {
        paddingRight: '15px',
        display: 'inline',
        fontSize: '10px',
        color: 'black'
    }
}