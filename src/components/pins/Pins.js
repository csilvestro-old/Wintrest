import React from 'react';

const Pins = props => {  
    return (
        <li style={styles.li}>
            <h6>{props.pinTitle}</h6>
            <button type='button' onClick={props.editItem}>Edit</button>
            <button type='button' onClick={props.deleteItem}>Delete</button>
        </li>
    )
}
export default Pins


const styles= {
    li: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 'solid',
        width: '10%',
        padding: '1%'
    }
}