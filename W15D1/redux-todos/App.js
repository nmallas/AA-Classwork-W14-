const {
    store,
    createTask,
    deleteTask,
    resetTaskList,
  } = require('./reduxStoreActionReducer');


console.log('Default Redux Store (empty task list):');
console.log(store.getState())

store.dispatch(createTask("Walk the dog"));
store.dispatch(createTask('talk to bird'));
store.dispatch(createTask('walk the goldfish'));
store.dispatch(createTask("Make coffee"));

console.log('Redux Store:');
console.log(store.getState());

store.dispatch(deleteTask(0));
store.dispatch(deleteTask(0));

console.log('Updated Redux Store:');
console.log(store.getState())

store.dispatch(resetTaskList());

console.log('Reset Redux Store (empty task list):');
console.log(store.getState());
