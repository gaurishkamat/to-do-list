import logo from './logo.svg';
import './App.css';
import React from 'react';
import { getCurrentDate } from './utils';
import { v4 as uuidv4 } from 'uuid';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';

//class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      textValue: '',
    };
    this.addTaskListener = this.addTaskListener.bind(this);
    this.deleteTaskListener = this.deleteTaskListener.bind(this);
  }

  /* clearInput = () => {
    this.setState({
      textValue: '',
    });
  }; */
  //alt + shift + a

  //formal parameter

  addTaskListener(event, taskName) {
    event.preventDefault();
    let task = {
      taskName,
      created: getCurrentDate(),
      id: uuidv4(),
    };

    let arr = [...this.state.list, task]; // array of objects

    this.setState({
      list: arr,
      textValue: '',
    });
  }

  deleteTaskListener(id) {
    let newList = this.state.list.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      list: newList,
    });
  }

  //state update, update props
  render() {
    return (
      <main className='main-container'>
        <h3 className='header'>To Do List</h3>
        <FormComponent addTaskListener={this.addTaskListener} />
        <ListComponent
          list={this.state.list}
          deleteTaskListener={this.deleteTaskListener}
        />
      </main>
    );
  }
}

export default App;
