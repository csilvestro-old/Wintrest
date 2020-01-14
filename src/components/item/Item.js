import React from 'react';

const Item =props=>{
    return(
        <div key={props.id} style={styles.container}>
            <img style={styles.image} width="200px" src={props.src} alt={props.alt}/>
            <h2>{props.title}</h2>
        </div>
    )
}
export default Item;

const styles={
    container:{
        width:'15%',
        borderRadius:'10px',
        textAlign:'center',
        margin:'1rem',
        fontSize:'1em'
    },
    image:{
        borderRadius:'20px',
        height:'15rem',
        width:'15rem'
    }
}