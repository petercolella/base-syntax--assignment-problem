import React from 'react';
import './User.css';

const userInput = (props) => {
    return (
        <div className="User">
            <input type="text" onChange={props.changed} value={props.value} />
        </div>
    )
}

export default userInput;