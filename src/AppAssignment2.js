import React , {Component} from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './Char/Char';
class AppAssignment2 extends Component{
    state = {
        userInput : ''
    }

   
    textCountHandler = (event) => {
        this.setState({userInput:event.target.value});
    }

    deleteNameHandler = (index) => {
        const userDeleted = this.state.userInput.split('');
        userDeleted.splice(index,1);
        const updated = userDeleted.join('');
        this.setState({userInput:updated});
      }

    render(){

        const charList = this.state.userInput.split('').map((ch,index) => {
            return <Char character ={ch} 
            key={index}
            clicked = {(() => this.deleteNameHandler(index))}></Char>
        })

        return (
            <div className="App">              
            <p>Hey u</p>
            <input text ="" 
            onChange = {this.textCountHandler}
            value = {this.state.userInput}/>
            <p>{this.state.userInput}</p>
            <Validation inputLength = {this.state.userInput.length}></Validation>
            {charList}
            </div>             
        );
    }
    
}
export default AppAssignment2;