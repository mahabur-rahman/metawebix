import { useReducer } from "react";

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        count: state.count > 0 ? state.count - 1 : 0,
      };

    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
};

export default function TestReducter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Use reducer hook practice : </h1>

      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}
