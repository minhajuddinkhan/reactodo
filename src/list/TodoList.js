import React, {Component} from 'react';


class TodoListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(i, e) {

        const list = this.state.list.slice();
        list[i].done = !list[i].done        
        console.log(list[i].done);
        this.setState({
            list: list
        })    
    }
    

    render() {

//                    checked={this.state.list[i].done}

        return (
            
            this.state.list.map((task, i) => {
                return (
                    <div key={i}>
                    {task.name} 
                    <input type="checkbox" 
                    onChange={this.handleChange.bind(this,i)}
                    value={task.done}                    
                    />

                   </div>
                      
                )
            })
            
          )

    }
}

export default TodoListComponent;