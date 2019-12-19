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
        complete: false
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
      <div className="App">
        <Todos/>
      </div>
    );
  }
}

export default App;
