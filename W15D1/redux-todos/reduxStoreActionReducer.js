const {createStore} = require("redux");

const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

const taskReducer = (state = [], action) => {
    switch(action.type) {
        case(""):
            return;
    }
}

const store = createStore(taskReducer);

const createTask = (taskMessage) => {
    return {
        type: CREATE_TASK,
        taskMessage
    }
}

const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId
    }
}
