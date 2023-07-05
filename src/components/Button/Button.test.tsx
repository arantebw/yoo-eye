import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Primary button test", () => {
  test("check button is disabled", () => {
    render(
      <Button
        text="Primary"
        disabled
      />,
    );
    expect(screen.getByRole("button", { name: "Primary" })).toBeDisabled();
  });
});
