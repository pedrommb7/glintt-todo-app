import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("should render Input component correctly", () => {
    render(<Input type={"text"} />);
  });
});
