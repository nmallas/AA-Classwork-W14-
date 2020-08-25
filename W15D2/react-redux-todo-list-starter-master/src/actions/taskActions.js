export const CREATE_TASK = `CREATE_TASK`;
export const DELETE_TASK = `DELETE_TASK`;

// TODO: Define `createTask` action creator function
export const createTask = (taskMessage) => {
    return {
        type: CREATE_TASK,
        taskId: new Date().getTime(),
        taskMessage
    }
}
// TODO: Define `deleteTask` action creator function
export const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId
    }
}
