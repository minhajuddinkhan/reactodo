import React, {Component} from 'react';



class TodoTask {
    constructor(name) {
        this.name = name;
        this.done = false;
    }
}

class TextboxComponent extends Component{

    constructor(props) {

        super(props)

    
        this.pushTodo = this.pushTodo.bind(this);
        this.state = {
            todoList: this.props.list,
            todo: "",
            pushTodo: this.props.addTodo
        }
        
    }

    handleChange(e) {
        this.setState({
           todo: e.target.value,
           done: false 
        })
    }

    pushTodo(e) {
        if(e.key === 'Enter') {
            this.state.pushTodo( new TodoTask(e.target.value) )
            this.setState({
                todo: ""                
            })
            console.log(this.state.todoList);  
            
        }
    }

    render() {
        return (
            <div>
                <input type="text" 
                onChange={this.handleChange.bind(this)}
                value={this.state.todo} 
                onKeyPress={this.pushTodo}/>
                <p> {this.state.todoList} </p>
        
            </div>
        )

    }
}


export default TextboxComponent;