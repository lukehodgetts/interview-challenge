import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MenuPreview from "./MenuPreview";

const testArray = [{ name: "testName", dietaries: ["tD"], id: 123 }];

it("renders without crashing", () => {
  render(<MenuPreview selectedItems={testArray} />);
});
