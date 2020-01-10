import React, { Component } from 'react';
import RegisterModal from '../components/RegisterModal'
import BottomNav from '../components/BottomNav';

class Register extends Component {
    render() {
        return (
            <div style={styles.cotainer}>
                <RegisterModal />
                <BottomNav />
            </div>
        )
    }
}
export default Register

const styles = {
    cotainer: {
        height: '90vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
    }
}