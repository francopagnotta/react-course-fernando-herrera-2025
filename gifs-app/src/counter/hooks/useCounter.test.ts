import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("Should initialize with default value of 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(0);
  });

  test("should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.handleAdd();
    });

    expect(result.current.counter).toBe(1);
  });

  test("should decrement counter when handleSubtract is called", () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
        result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(9);
  });

  test("should reset counter to 0 when handleReset is called and the initial value is 0", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.handleAdd();
    });

    act(() => {
        result.current.handleReset();
    });

    expect(result.current.counter).toBe(0);
  });

  test("should reset counter to 10 when handleReset is called and the initial value is 10", () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
        result.current.handleAdd();
    });

    act(() => {
        result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
