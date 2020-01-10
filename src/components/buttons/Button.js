import React, { Fragment } from 'react';

const Button =props=>{
    return(
        <Fragment>
            <button className="btn" style={props.styles} onClick={props.logIn}>
            {props.label}
            </button>
        </Fragment>
    )
    
}

export default Button;
