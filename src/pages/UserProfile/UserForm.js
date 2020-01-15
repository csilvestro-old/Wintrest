import React from 'react';

const UserForm=props=>{
    return(
        <form onSubmit={props.submitBoard}>
        <h1>Create Board</h1>
        <span>X</span>
        <input label='Name' placeholder='Like "Places to Go" or "Recipes to Make"' onChange={props.boardInput} />
        <input type='checkbox' label='Visbility' />
        <div>Keep this board secret learn more!</div>
        <button>Cancel</button>
        <button type='submit'>Create</button>
    </form>
    )
}
export default UserForm