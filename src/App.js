import logo from './logo.svg';
import './App.css';
import React from 'react';
import { getCurrentDate } from './utils';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      textValue: '',
    };
    this.textChangeListener = this.textChangeListener.bind(this);
    this.addTaskListener = this.addTaskListener.bind(this);
  }

  textChangeListener(event) {
    let value = event.target.value;
    this.setState({
      textValue: value,
    });
  }

  addTaskListener() {
    let task = {
      taskName: this.state.textValue,
      created: getCurrentDate(),
      id: uuidv4(),
    };

    let arr = [...this.state.list, task]; // array of objects

    this.setState({
      list: arr,
    });
  }

  //state update, update props
  render() {
    return (
      <div>
        <h3>To Do List</h3>
        <input
          type='text'
          value={this.state.textValue}
          onChange={this.textChangeListener}
        />
        <button onClick={this.addTaskListener}>Add Task</button>
        {this.state.list.map((listItem) => {
          return (
            <div className='list-item' key={listItem.id}>
              <p>{listItem.taskName}</p>
              <p>{listItem.created}</p>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
