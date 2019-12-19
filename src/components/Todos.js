import React from "react";
import TodoItem from "./TodoItem";

export class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <div>
        <TodoItem todo={todo} />
      </div>
    ));
  }
}

export default Todos;
