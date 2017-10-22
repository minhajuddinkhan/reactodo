import React, { Component } from 'react';



class TodoTask {
    constructor(name) {
        this.name = name;
        this.done = false;
    }
}

class TextboxComponent extends Component {

    constructor(props) {

        super(props)
        this.state = {
            todo: "",
        }

        this.pushTodo = this.pushTodo.bind(this);
        this.validateTask = this.validateTask.bind(this);

    }

    handleChange(e) {
        this.setState({
            todo: e.target.value
        })
    }
   
    validateTask(e){
        return e.key === 'Enter' && e.target.value.length > 0
    }
   
    pushTodo(e) {
        if (this.validateTask(e)) {
            this.props.addTodo(new TodoTask(e.target.value))
            this.setState({
                todo: ""
            })
        }
    }

    render() {
        return (
            <div className="container">



                <input placeholder="What are your tasks for today?" className="form-control" type="text"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.todo}
                    onKeyPress={this.pushTodo} />
                <p> {this.state.todoList} </p>
            </div>
        )

    }
}


export default TextboxComponent;