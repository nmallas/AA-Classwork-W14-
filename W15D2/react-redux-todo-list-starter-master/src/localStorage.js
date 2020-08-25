const STATE_KEY = 'tasks';

export const loadState = () => {
  try {
    let tasks = localStorage.getItem(STATE_KEY);
    return tasks ? JSON.parse(tasks) : undefined;
  } catch(e) {
    console.warn(e);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem(STATE_KEY, state);
  } catch (e) {
    console.warn(e);
  }
  // TODO: Try to parse the state from JavaScript into a JSON string
  // TODO: Set the JSON string into local storage

  // TODO: Catch any errors with a `console.warn` statement
};
