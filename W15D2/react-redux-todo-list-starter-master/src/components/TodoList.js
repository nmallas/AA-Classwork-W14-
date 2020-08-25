import React from 'react';
import Task from './Task';
import store from "../store";
import {deleteTask, resetTaskList} from "../actions/taskActions";
import TaskReset from './TaskReset';


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

  resetTaskList = () => {
    store.dispatch(resetTaskList());
  }

  render() {
      let tasks = store.getState();
      let taskArray = Object.values(tasks);
      if(!tasks || !taskArray.length) {
        return null;
      } else {
        return (
          <>
            <ul>
              {
                taskArray.map(task => <Task key={task.id} task={task} deleteTask={this.deleteTask}></Task>)
              }
            </ul>
            <TaskReset resetTaskList={this.resetTaskList}/>
          </>
        );
      }
  }
}

export default TodoList;
