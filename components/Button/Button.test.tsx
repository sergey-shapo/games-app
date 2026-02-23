import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders with the correct label", () => {
    render(<Button label="Click me" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('defaults to type "button" if no type is provided', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveAttribute("type", "button");
  });

  it("accepts a custom type", () => {
    render(<Button label="Submit" type="submit" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveAttribute("type", "submit");
  });

  it("renders as disabled when disabled prop is true", () => {
    render(<Button label="Disabled" disabled onClick={() => {}} />);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
  });
});
