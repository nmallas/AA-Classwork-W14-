import React from 'react';
import Task from './Task';
import store from "../store";
import {deleteTask} from "../actions/taskActions";


class TodoList extends React.Component {
  componentDidMount() {
     this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    if(this.unsubscribe) this.unsubscribe();
  }

  deleteTask = (id) => {
      store.dispatch(deleteTask(id));
  }

  render() {
      let tasks = store.getState();
      if(!tasks) {
        return null;
      } else {
        let taskArray = Object.values(tasks);
        return (
          <ul>
            {
              taskArray.map(task => <Task key={task.id} task={task} deleteTask={this.deleteTask}></Task>)
            }
          </ul>
        );
      }
  }
}

export default TodoList;
