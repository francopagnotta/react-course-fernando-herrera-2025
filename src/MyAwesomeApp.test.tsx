import { Component } from "react";
import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    // ARRANGE
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    // ACT
    expect(h1?.innerHTML.trim()).toBe("Fran");
    expect(h3?.innerHTML.trim()).toBe("Pagnotta");
  });

  test("should render firstName and lastName - using screen", () => {
    // ARRANGE
    render(<MyAwesomeApp />);

    // const h1 = screen.getByRole("heading", {
    //   level: 1,
    // });

    // const h3 = screen.getByRole("heading", {
    //   level: 3,
    // });

    const h1 = screen.getByTestId("first-name-title");
    const h3 = screen.getByTestId("last-name-title");

    // ACT
    screen.debug();

    expect(h1.innerHTML).toContain("Fran");
    expect(h3.innerHTML).toContain("Pagnotta");
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });
});
