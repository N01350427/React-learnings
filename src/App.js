import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import OutputFile from './UserOutput/Output';
import InputFile from './UserInput/Input';

class App extends Component {
state = {
  details : [
    { name : 'Akhil' , age :30},
    { name : 'Deepak' , age : 25},
    { name : 'Pranay', age:27}
  ]
};

switchNameHandler = () => {
  this.setState({
    details : [
      { name: 'newName' ,age: 32},
      { name : 'Shakil', age : 56},
      { name:'Jihad', age : 40}
    ]
  })
 }

 nameChangedHandler = (event) => {
  this.setState({
    details : [
      { name: event.target.value ,age: 32},
      { name : 'Max', age : 56},
      { name:'Jihad', age : 26}
    ]
  })
}

    render() {
        return (
          <div className="App">
          <button onClick={this.switchNameHandler}>Click Me</button>
          <OutputFile name ={this.state.details[0].name} age = "10"></OutputFile>
          <OutputFile name ={this.state.details[1].name} age = "10"></OutputFile>
          <OutputFile name ={this.state.details[2].name}
          age = "10"
          ></OutputFile>
          <InputFile changed = {this.nameChangedHandler} name = "Max"></InputFile>
          </div>
        );
        //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this exist?'));
    }
}

export default App;