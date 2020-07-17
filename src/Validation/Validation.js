import React from 'react';

const validation = (props) => {
      {props.inputLength} 
      let text = "";
      if( props.inputLength > 5){
        text = "Text too long";
      }
      else{
        text = "Text too small";
      }
      return(
          <div>
              <p>{text}</p>
          </div>
      )

}

export default validation;