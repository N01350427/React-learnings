import React,{ Component } from 'react';
import App from './App.css';
import Validation from './Validation/Validation';
import Char from './charcomponent/char'

class AppTrial extends Component{
state = {
    userInput :''
}
textChangeHandler = (event) =>
        {
            this.setState({userInput:event.target.value
            })}

            deleteArrayHandler = (index) => {
                const text = this.state.userInput.split('')
                text.splice(index,1);
                const updatedText = text.join('');
                this.setState({userInput : updatedText});
            }
    render(){  
        
        const charList = this.state.userInput.split('').map((ch,index)=>
        {
            return(<Char character={ch}
                key = {index}
                clicked = {(() => this.deleteArrayHandler(index))}
            ></Char>)
        })


        return(
            <div className ="App">
                <hr></hr>
                <input type="text" 
                onChange={this.textChangeHandler}
                value = {this.state.userInput}
                ></input>
                <p>{this.state.userInput}</p>
                <Validation inputLength ={this.state.userInput.length}></Validation>
                {charList}
            </div>
        );
    }       
}
export default AppTrial ;