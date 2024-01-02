import useCounter from "../customHook/useCount";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>This is Counter if custom hook</h2>

      <h4>Count: {count}</h4>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
