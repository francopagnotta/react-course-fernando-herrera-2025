import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("should add two positive numbers", () => {
    const a = 1;
    const b = 2;
    const result = add(a, b);

    expect(result).toBe(3);
  });

  test("should add two negative numbers", () => {
    const a = -1;
    const b = -2;
    const result = add(a, b);
    expect(result).toBe(-3);
  });
});

describe("subtract", () => {
  test("should subtract two positive numbers", () => {
    const a = 2;
    const b = 1;

    const result = subtract(a, b);

    expect(result).toBe(1);
  });
  test("should subtract two negative numbers", () => {
    const a = -2;
    const b = -1;

    const result = subtract(a, b);

    expect(result).toBe(-1);
  });
});

describe("multiply", () => {
  test("should multiply two positive numbers", () => {
    const result = multiply(1, 1);

    expect(result).toBe(1);
  });
});

describe("divide", () => {
  test("should divide two positive numbers", () => {
    const result = divide(1, 1);

    expect(result).toBe(1);
  });
});
