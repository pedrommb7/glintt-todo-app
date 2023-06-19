import React, { FC } from "react";
import { SelectProps } from "./types";

const Select: FC<SelectProps> = ({ name, value, options, className }) => {
  return (
    <select name={name} className={`${className}`}>
      {options.map((option) => (
        <option key={option} value={value}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
