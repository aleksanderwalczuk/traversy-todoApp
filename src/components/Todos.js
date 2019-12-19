import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

export class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <div>
        <TodoItem key={todo.id} todo={todo} />
      </div>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
