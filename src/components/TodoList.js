/*
/* Module dependencies
 */
import React, { PropTypes } from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo key={todo.id} text={todo.text}/>
        )}
      </ul>
    )
  }
}


export default TodoList
