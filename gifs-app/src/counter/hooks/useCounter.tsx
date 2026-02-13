import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    // setCounter((previousState) => previousState - 1); // for those cases when we can't count with the state piece and we need to use the previous state value
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    counter: counter,
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
