import React, { Component } from 'react';

class TodoListComponent extends Component {

    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this);
        console.log(props.isDone)

    }
    handleChange(i, e) {
        this.props.list[i].done = !this.props.list[i].done
    }

    removeTodo(i, e) {

        this.props.removeTodo(i);
    }

    doneTodo(i, e) {
        this.props.doneTodo(i);
    }

    undoTodo(i) {
        this.props.undoTodo(i);
    }

    render() {

        const AllowDone = (i) => (<div className="col col-md-4">
            <button className="btn btn-primary" onClick={this.doneTodo.bind(this, i)}> Done </button>
        </div>)

        const remove = (i) => (

            <div className="col col-md-4">
                <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}> Remove </button>
            </div>
        )
        const undo = (i) => (

            <div className="col col-md-4">
                <button className="btn btn-default" onClick={this.undoTodo.bind(this, i)}> Undo </button>
            </div>
        )

        const li = this.props.list.map((task, i) => {
            return (
                <div key={i} className="row">
                    <div className="col col-md-4">
                        <h4>{task.name}
                        </h4>

                    </div>
                    {!this.props.isDone ? AllowDone(i) : null}

                    {!this.props.isDone ? remove(i) : undo(i)}

                </div>

            )
        })

        const heading = () => {
            if (this.props.list.length) {
               return( <h3>
                    {this.props.isDone ? 'Things You Gotta Do' : 'Things you have done'}
                </h3>
               )
            }else {
                return(
                    <h3> { !this.props.isDone ? `You've got nothing to do ...`: null }  </h3>
                )
            }

        }

        return (
            <div>
                {heading()}
                {li}
            </div>


        )

    }
}

export default TodoListComponent;