import React from 'react';

const Item =props=>{
    return(
        <div key={props.id} style={styles.container}>
            <img width="200px" src={props.src} alt={props.alt}/>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    )
}
export default Item;

const styles={
    container:{
        width:'15%',
        borderRadius:'10px'
        
    },
}