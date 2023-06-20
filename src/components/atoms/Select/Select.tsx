import React, { FC } from "react";
import { SelectProps } from "./types";

const Select: FC<SelectProps> = ({
  name,
  value,
  options,
  className,
  onChange,
  ariaLabel,
}) => {
  return (
    <select
      name={name}
      className={`${className}`}
      onChange={onChange}
      aria-label={ariaLabel}
    >
      {options.map((option) => (
        <option key={option} value={value}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
