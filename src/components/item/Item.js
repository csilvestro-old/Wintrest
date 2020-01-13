import React from 'react';

const Item =props=>{
    return(
        <div style={styles.container}>
            <h2>{props.title}</h2>
            <img src={props.src} alt={props.alt}/>
            <p>{props.desc}</p>
        </div>
    )
}
export default Item;

const styles={
    container:{
        backgroundColor:'white',
        width:'15%',
        borderRadius:'10px'
        
    },
}