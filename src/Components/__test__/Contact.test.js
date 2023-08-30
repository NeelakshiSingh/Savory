import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load heading inside contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });
  test("Should load input inside contact us component", () => {
    render(<Contact />);

    const inputText = screen.getByPlaceholderText("Name");

    //Assertion
    expect(inputText).toBeInTheDocument();
  });
  test("Should load input boxes inside contact us component", () => {
    //Rendering
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
