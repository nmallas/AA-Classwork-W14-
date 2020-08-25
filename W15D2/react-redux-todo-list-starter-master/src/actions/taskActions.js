import React from "react";

const CREATE_TASK = `CREATE_TASK`;
const DELETE_TASK = `DELETE_TASK`;

// TODO: Define `createTask` action creator function
export createTask = (taskMessage) => {
    return {
        type: CREATE_TASK,
        taskId: new Date().getTime(),
        taskMessage
    }
}
// TODO: Define `deleteTask` action creator function
export deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId
    }
}
