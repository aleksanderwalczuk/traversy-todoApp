import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TodoItem extends Component {

  getStyle = () => {
    console.log(this.props.todo.complete)
    if(this.props.todo) {
      console.log('dupa romana')
      return {
        background: 'lightgray',
        padding: '1rem',
        textDecoration: this.props.todo.complete ?
        'line-through' : 'none'
      }

    }
  }
  render() {
    return (
      <div style={this.getStyle()}>
  <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
