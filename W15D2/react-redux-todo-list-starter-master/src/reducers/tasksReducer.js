import {CREATE_TASK, DELETE_TASK} from "../actions/taskActions";

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {...state};
    switch(action.type) {
      case CREATE_TASK:
        let newTask = {id: action.taskId, message: action.taskMessage}
        nextState[action.taskId] = newTask;
        return nextState;
      case DELETE_TASK:
        delete nextState[action.taskId];
        return nextState;
      default:
        return state;
    }
};

export default tasksReducer;
