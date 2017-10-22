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


    }

    handleChange(e) {
        this.setState({
            todo: e.target.value
        })
    }

    pushTodo(e) {
        if (e.key === 'Enter') {

            this.props.addTodo(new TodoTask(e.target.value))
            this.setState({
                todo: ""
            })
        }
    }

    render() {
        return (
            <div>
                <input type="text"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.todo}
                    onKeyPress={this.pushTodo} />
                <p> {this.state.todoList} </p>
            </div>
        )

    }
}


export default TextboxComponent;