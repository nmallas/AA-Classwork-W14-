import React from "react";

const TaskReset = ({resetTaskList}) => {
    return (
        <button onClick={resetTaskList}> Reset Tasks</button>
    )
}

export default TaskReset;
