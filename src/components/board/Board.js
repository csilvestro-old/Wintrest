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
                            title={pin.title} 
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
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1%'
    },
    h1:{
        fontSize: '1.25em'
    }
}