const createStore = (reducer, initialState) => {
  let state = initialState;
  let updater = () => {};

  // Allows the store to get the current state
  const getState = () => state;

  // Allows the store to trigger an action
  const dispatch = (action) => {
    state = reducer(state, action);
    updater();
  };

  // Allows the store to subscribe and execute a function when a
  // change of state has ocurred
  const subscribe = (listener) => {
    updater = listener;
  };

  return { getState, dispatch, subscribe };
};

// function that determines what to do according to the received action
const reducer = (state, action) => {
  switch (action) {
    case "__change__":
      return (state += " changed");
    default:
      break;
  }
};

const store = createStore(reducer, "Initial State");

store.subscribe(() => console.log(`Something chaged: * ${store.getState()} *`));

setTimeout(() => store.dispatch("__change__"), 2000);
