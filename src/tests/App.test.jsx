import App from "../App";
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from 'vitest';


describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});