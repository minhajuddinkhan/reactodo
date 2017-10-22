import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextboxComponent from './textbox/Textbox'
import TodoListComponent from './list/TodoList'
class App extends Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
    this.undoTodo = this.undoTodo.bind(this);

    this.state = {
      todoList: [],
      doneList: []
    }
  }

  addTodo(job) {

    const l = this.state.todoList.slice();
    l.push(job)

    this.setState({
      todoList: l
    })

  }

  removeTodo(i) {
    const l = this.state.todoList.slice();
    l.splice(i, 1);

    this.setState({
      todoList: l
    })

  }

  doneTodo(i) {
    const d = this.state.doneList.slice();

    console.log(this.state.todoList[i]);
    d.push(this.state.todoList[i]);

    const l = this.state.todoList.slice();
    l.splice(i, 1);

    this.setState({
      doneList: d,
      todoList: l
    })


  }

  undoTodo(i) {
    const l = this.state.todoList.slice();
    l.push(this.state.doneList[i]);

    const d = this.state.doneList.slice();
    d.splice(i, 1);

    this.setState({
      doneList: d,
      todoList: l

    })
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">   The Todo List App.
       </h1>
        </header>


        <TextboxComponent list={this.state.todoList} addTodo={this.addTodo} />
        <hr />
        <TodoListComponent list={this.state.todoList} isDone={false} removeTodo={this.removeTodo} doneTodo={this.doneTodo} />
        <hr />
        
        <TodoListComponent list={this.state.doneList} undoTodo={this.undoTodo} isDone={true} />
      </div>
    );
  }
}

export default App;
