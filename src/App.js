import './App.css';
import React, { useEffect } from 'react';
import { getCurrentDate } from './utils';
import { v4 as uuidv4 } from 'uuid';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';
import { AppContext } from './AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { TableBody } from '@mui/material';
//class component
class App extends React.Component {
  static contextType = AppContext;

  constructor() {
    super();
    this.state = {
      list: [],
    };
    this.addTaskListener = this.addTaskListener.bind(this);
    this.deleteTaskListener = this.deleteTaskListener.bind(this);
  }

  /* componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  static getDerivedStateFromProps() {
    
  }

  getSnapshotBeforeUpdate() {
    
  } */
  /* clearInput = () => {
    this.setState({
      textValue: '',
    });
  }; */
  //alt + shift + a

  //formal parameter

  addTaskListener(event, taskName) {
    event.preventDefault();
    //.? is optional chaining
    let task = {
      taskName: taskName?.toLowerCase(),
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

  componentDidUpdate() {
    document.body.classList[this.context.theme === 'dark' ? 'add' : 'remove'](
      'dark'
    );
  }

  //state update, update props
  render() {
    return (
      <div className='main-container'>
        <Header theme={this.context.theme} setTheme={this.context.setTheme} />
        <div className='main'>
          <FormComponent addTaskListener={this.addTaskListener} />
          <ListComponent
            list={this.state.list}
            deleteTaskListener={this.deleteTaskListener}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
