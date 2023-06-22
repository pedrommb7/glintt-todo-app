import { render } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
  it("should render Select component correctly", () => {
    render(<Select options={["All", "Completed", "Uncompleted"]} />);
  });
});
