import React from 'react';
import './char.css';

const char = (props) => {
return(
    <div className = "Char" onClick = {props.clicked}>
        {props.character}</div>
    
)
}
export default char;