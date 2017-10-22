import React, {Component} from 'react';


class TodoListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(i, e) {

        const list = this.state.list.slice();
        list[i].done = !list[i].done        
        console.log(list);
        this.setState({
            list: list
        })    
    }

    componentDidUpdate(nextProps, prevProps) {
        if (prevProps.list.length !== nextProps.list.length) {
            console.log("nextProps ", nextProps);
            this.setState({
                list: nextProps.list
            })
        }
    }
    

    render() {

//                    checked={this.state.list[i].done}
        console.log('change state!!', this.state.list);
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