import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", () => {
  render(<Card name="test" dietaries={["t"]} />);
});

it("renders close button", () => {
  const { getByRole } = render(
    <Card name="test" dietaries={["t"]} onCloseClick={() => {}} />
  );

  const button = getByRole('button');

  expect(button).toBeDefined()
});
