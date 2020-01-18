import React from 'react';
import './CreateBoard.css'
const CreateBoard =props=>{
    return(
            <form className="boardForm" onSubmit={props.onSubmit}>
                <img onClick={props.exit} width="20px" src={require('../../images/icons8-x-50.png')}  alt="exit"/>
                <h2>Create Board</h2>
                <div className="boardInput">
                    <label for="name">Name</label>
                    <input name="name" placeholder='Like "Places to Go" or "Recipes to Make"'/>
                </div>
                <div className="boardInput">
                    <label for="check">Visibility</label>
                    <input type="checkbox" name="check"/> <div className="chck"><p>Keep this board secret</p><p>Learn more</p></div>
                </div>
                <div className="boardBtns">
                    <button onClick={props.cancel} type="button">Cancel</button>
                    <button type="submit">Create</button>
                </div>
            </form>
    )
}

export default CreateBoard;