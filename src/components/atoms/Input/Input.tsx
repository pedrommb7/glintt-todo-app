import React, { FC } from "react";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({
  type,
  placeholder,
  className,
  style,
  min,
  max,
  maxLength,
  ariaLabel,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      maxLength={maxLength}
      aria-label={ariaLabel}
      onChange={onChange}
      className={`${className}`}
      style={style}
    />
  );
};

export default Input;
