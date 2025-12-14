import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    // ARRANGE
    const name = "test item";

    render(<ItemCounter name={name} />);

    // ACT
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    // ARRANGE
    const name = "test item";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={10} />);

    // ACT
    expect(screen.getByText(quantity)).toBeDefined();
    expect(screen.getByText(quantity)).not.toBeNull();
  });

  test("should increase count when +1 button is pressed", () => {
    render(<ItemCounter name="test" quantity={1} />);

    const [handleAddBtn] = screen.getAllByRole("button");

    fireEvent.click(handleAddBtn);
    expect(screen.getByText(2)).toBeDefined();
  });

  test("should decrease count when -1 button is pressed", () => {
    render(<ItemCounter name="test" quantity={5} />);

    const [_, handleSubtractBtn] = screen.getAllByRole("button");

    fireEvent.click(handleSubtractBtn);
    expect(screen.getByText(4)).toBeDefined();
  });

  test("should change to color red when count is equal to 1", () => {
    const name = "test item";

    render(<ItemCounter name={name} quantity={1} />);

    const itemItext = screen.getByText(name);

    expect(itemItext.style.color).toBe("red");
  });

  test("should change to color red when count is equal to 1", () => {
    const name = "test item";

    render(<ItemCounter name={name} quantity={1} />);

    const itemItext = screen.getByText(name);

    expect(itemItext.style.color).toBe("red");
  });

  test("should change to color black when count is greater than 1", () => {
    const name = "test item";

    render(<ItemCounter name={name} quantity={2} />);

    const itemItext = screen.getByText(name);

    expect(itemItext.style.color).toBe("black");
  });
});
