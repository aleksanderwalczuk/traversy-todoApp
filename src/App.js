import React from 'react';
import './App.sass';
import Todos from './components/Todos';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'make dinner',
        complete: false
      },
      {
        id: 2,
        title: 'mop the floor',
        complete: true
      },
      {
        id: 3,
        title: 'clean the bathroom',
        complete: false
      }
    ]
  }
  render () {
    return (
      <div>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
