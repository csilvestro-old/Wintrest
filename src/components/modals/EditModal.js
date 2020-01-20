import React from 'react';
import './EditModal.css';

const EditModal =props=>{
    return(
            <div style={styles.container}>
                <h3>{props.title}</h3>
                <img src={require('../../images/scott.png')} alt="stinky scotty"/>
            </div>
    )
}

export default EditModal;

const styles={
    conatiner:{

    },
}