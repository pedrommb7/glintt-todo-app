import React, { FC } from "react";
import { FormProps } from "./types";

const Form: FC<FormProps> = ({ children, className, id }) => {
  return (
    <form className={className} id={id}>
      {children}
    </form>
  );
};

export default Form;
