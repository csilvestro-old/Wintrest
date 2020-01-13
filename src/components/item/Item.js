import React from 'react';

const Item =props=>{
    return(
        <div style={styles.container}>
            <h2>{props.title}</h2>
            <img width="200px" src={props.src} alt={props.alt}/>
            <p>{props.desc}</p>
        </div>
    )
}
export default Item;

const styles={
    container:{
        backgroundColor:'gray',
        width:'15%',
        borderRadius:'10px'
        
    },
}