import React from "react";
import TodoItem from "./TodoItem";

export class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <div>
        <TodoItem key={todo.id} todo={todo} />
      </div>
    ));
  }
}

export default Todos;
