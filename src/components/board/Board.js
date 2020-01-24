import React, {Component} from 'react';
import Pins from '../pins/Pins';

//export default class TodoList extends Component {
class Board extends Component {
//const Board = props => {  
    render() {
        const {pins, deleteItem, editItem} = this.props
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
            </ul>
        )
    }
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