import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
  const { counter, handleAdd, handleReset, handleSubtract } = useCounter(15);

  return (
    <div>
      MyCounterApp
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>counter: {counter}</h1>

        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={handleAdd}>+ 1</button>
          <button onClick={handleSubtract}>- 1</button>
          <button onClick={handleReset}>reset</button>
        </div>
      </div>
    </div>
  );
};
