import { render } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("should render Form component correctly", () => {
    render(<Form id={"addToDos-form"} />);
  });
});
