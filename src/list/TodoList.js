import React, { Component } from 'react';


class TodoListComponent extends Component {

    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(i, e) {
        this.props.list[i].done = !this.props.list[i].done
    }



    render() {

        return (

            this.props.list.map((task, i) => {
                return (
                    <div key={i}>
                        {task.name}
                        <input type="checkbox"
                            onChange={this.handleChange.bind(this, i)}
                            value={task.done}
                        />

                    </div>

                )
            })

        )

    }
}

export default TodoListComponent;