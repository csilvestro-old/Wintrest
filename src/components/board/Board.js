import React, {Component} from 'react';
import Pins from '../pins/Pins';

const Board = props => {  
        
        return (
            <ul style={styles.h1}>
                <h3>Board</h3>
                {pins.map(pin => {
                    return (
                        <Pins 
                            key={pin.id} 
                            pinTitle={pin.pinTitle} 
                            deleteItem={()=> deleteItem(pin.id)}
                            editItem={()=> editItem(pin.id)}
                        />
                    )
                })}
                klk
            </ul>
        )
    }
export default Board

const styles= {
    h1:{
        fontSize: '1.25em',
        border: 'solid green',
        width: '20%',
        flexDirection: 'row',
        //background: 'red'
    }
}