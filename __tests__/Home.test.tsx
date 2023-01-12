import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";

import Home from "../pages/index";

test("Hello must be defined!", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  expect(screen.getByText(/HELLO/i)).toBeDefined();
});
