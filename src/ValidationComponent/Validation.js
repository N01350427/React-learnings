import React from 'react';

const validation = (props) =>{
    const length = 5;
    let message = 'Text too long'
    if (props.inputLength <= length)
    {
        message = 'Text too short'
    }
    return (
        <div>
<p>{message}</p>
        </div>     
    );
};


export default validation;