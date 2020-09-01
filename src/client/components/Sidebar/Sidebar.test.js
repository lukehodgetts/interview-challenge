import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";

const testArray = [
  { name: "testName", dietaries: ["tD"], id: 123 },
  { name: "item", dietaries: ["Af"], id: 999 },
];

it("renders without crashing", () => {
  render(<Sidebar items={testArray} />);
});

it("searchbar filters", () => {
  const { getByPlaceholderText, getAllByRole } = render(
    <Sidebar items={testArray} />
  );
  const input = getByPlaceholderText("Name");

  fireEvent.change(input, { target: { value: "item" } });

  expect(getAllByRole("listitem").length).toEqual(1);
});
