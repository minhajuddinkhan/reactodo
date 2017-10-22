import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  TextboxComponent from './textbox/Textbox'
import TodoListComponent from './list/TodoList'
class App extends Component {
  
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todoList: []
    }
  }

  addTodo(job) {
    console.log(job)
    this.state.todoList.push(job)
    this.setState({
      todoList: this.state.todoList
      
    })
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
           The Todo List App.
        </p>


        <TextboxComponent list={this.state.todoList} addTodo={this.addTodo} />
        <TodoListComponent list={this.state.todoList}/>
        
  
      </div>
    );
  }
}

export default App;
