import React from 'react';
//import Radium from 'radium';
//import styled from 'styled-components';
import styled from 'styled-components';
//import './Person.css';

const StyledDiv = styled.div`

    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 5px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px)': {
    width: '450px';
    }
`;

const Wrapper = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 5px #ccc;
padding: 16px;
text-align: center;
@media (min-width: 500px): {
    width: '450px';
    }
`;

const person = ( props ) => {
    /*const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };*/
    return (
       <Wrapper>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Wrapper>
       
    );
};

//export default Radium(person);
export default person;