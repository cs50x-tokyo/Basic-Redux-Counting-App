import "./styles.css";
import { createStore } from "redux";
//what are we going to learn:
//what is redux and why to use it - redux is a container for main state in our complex app, it helping us to connect every component without repeating the code and creating complicated connection between the components
//function and methods:
//createStore - to create new container for the state
//getState - to get the current state of our store
//dispatch - to fire up the action
//actions - object with minimum one property call 'type', describing what we want to do with the state
//subscribe - call on the store, fire up every time the state changes
//reducers - pure function with state and action as an arguments, declare what the state is and accessing our action statements to add features to our actions

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      //moved
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;

      return {
        count: state.count - decrementBy
      };
    default:
      return state;
  }
};

//Count app

const incrementCount = (payload = { incrementBy: "asdsad" }) =>
  //action object
  ({
    type: "INCREMENT",
    incrementBy:
      typeof payload.incrementBy === "number" ? payload.incrementBy : 1
  });

const decrementCount = (payload = { decrementBy: 2 }) =>
  //action object
  ({
    type: "DECREMENT",
    decrementBy:
      typeof payload.decrementBy === "number" ? payload.decrementBy : 1
  });

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());

document.getElementById("app").innerHTML = `
<h1>Hello Redux!</h1>
<div>
  Check the console for changes!
</div>
`;
