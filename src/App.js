import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { getCurrentDate } from "./utils";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      textValue: "",
    };
    this.textChangeListener = this.textChangeListener.bind(this);
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
  textChangeListener(event) {
    let value = event.target.value;
    this.setState({
      textValue: value,
    });
  }

  addTaskListener(event) {
    event.preventDefault();
    let task = {
      taskName: this.state.textValue,
      created: getCurrentDate(),
      id: uuidv4(),
    };

    let arr = [...this.state.list, task]; // array of objects

    this.setState({
      list: arr,
      textValue: "",
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
      <main className="main-container">
        <h3 className="header">To Do List</h3>
        <form>
          <div className="input-container">
            <input
              type="text"
              value={this.state.textValue}
              onChange={this.textChangeListener}
            />
            <button
              onClick={this.addTaskListener}
              disabled={!this.state.textValue.length}
              className="primary"
            >
              Add Task
            </button>
          </div>
        </form>
        {/* <button onClick={this.clearInput}>Clear Input</button> */}
        <div className="list-container">
          {this.state.list.map((listItem) => (
            <div className="list-item" key={listItem.id}>
              <p>{listItem.taskName}</p>
              <p>{listItem.created}</p>
              <button onClick={() => this.deleteTaskListener(listItem.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default App;
