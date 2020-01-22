import React from 'react';

const Pins=props=>{
    return(
        <div style={styles.container}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

export default Pins;

const styles={
    container:{
        border:'solid',
    }

}