import React from 'react';
import './Board.css';

const Board =props=>{
    return(
        <div className="outer">
            <div className="inner">
                {props.boardCont}
            </div>
            <h3>{props.title}</h3>
            <h4>{props.pins}</h4>
            <button onClick={()=>props.delete(props.key)}>Delete</button>
            <button onClick={props.edit}>Edit</button>
        </div>
    )
}

export default Board;

