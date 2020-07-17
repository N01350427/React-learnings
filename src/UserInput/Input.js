import React from 'react';

const inputFile = (props) =>
{
    return(<input type = "text" onChange = {props.changed} value={props.name}></input>);
    
}

export default inputFile;