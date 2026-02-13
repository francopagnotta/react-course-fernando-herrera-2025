import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  const title = "test title";
  const subtitle = "test subtitle";

  test("should render the title correctly", () => {
    render(<Header title={title} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeDefined();
  });

  test("should render the subtitle when provided", () => {
    render(<Header title={title} subtitle={subtitle} />);
    expect(screen.getByText(subtitle)).toBeDefined();
  });

  test("should not render description when not provided", () => {
    const { container } = render(<Header title={title} />);
    const divElement = container.querySelector(".content-center");
    const h1 = divElement?.querySelector("h1");
    const p = divElement?.querySelector("p");

    expect(h1?.innerHTML).toBe(title);
    expect(p).toBeNull();
  });
});
