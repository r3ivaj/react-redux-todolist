/*
/* Module dependencies
 */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {

  handleSubmit(event) {
    event.preventDefault()
    let text = this.input.value
    this.props.dispatch(addTodo(text))
    this.input.value = ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' ref={(ref) => this.input = ref}  />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
