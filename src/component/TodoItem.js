import React, { Component } from 'react'
import './TodoItem.css'

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
          completed: false
        };
      }

    handleOnClick() {
        var isClicked = this.setState.isClicked;
        var style = {textDecoration: 'none'};
        if (isClicked === true) {
            style = {textDecoration: 'line-through'}
        }
     }
    



    render() {
        const {id , title, handleDelete, handleEdit, handleDoneTask, completed,ToggleToDo} = this.props

     

        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6 style={{textDecoration: completed? "lineThrough":"none"}} className={`mt-1 mb-0 align-middle ${completed ? 'completed-task' : ''}`}>{title}
                <button onClick={()=>ToggleToDo(id)}> Done</button>
                </h6> 
                
                <div className="todo-icon">
                    <span 
                        className={`mx-2 ${completed ? 'text-success' : 'text-secondary'}`}
                        onClick={() => handleDoneTask(id)}
                    >
                        <i className={`${completed ? 'far fa-check-square' : 'far fa-square'}`} />
                    </span>
                    <span 
                        className="mx-2 text-warning"
                        onClick={handleEdit}
                    >
                        <i className="fas fa-pen" />
                    </span>
                    <span 
                        className="mx-2 text-danger"
                        onClick={handleDelete}
                    >
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </li>
        )
    }
}