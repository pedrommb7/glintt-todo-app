import React, { FormEvent } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";

const AddToDo = ({
  setInputValue,
  inputValue,
  toDos,
  setToDos,
}: {
  setInputValue: (value: string) => void;
  inputValue: string;
  setToDos: (value: string[]) => void;
  toDos: string[];
}) => {
  const handleToDo = (event: FormEvent) => {
    event?.preventDefault();
    if (inputValue) {
      setToDos([...toDos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <form className="flex mt--24">
      <div className="mr--8">
        <Input
          type={"text"}
          placeholder="Add todo..."
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button children={"Add"} onClick={handleToDo} />
      </div>
      <Select
        name="Select filter"
        options={["All", "Completed", "Uncompleted"]}
      />
    </form>
  );
};

export default AddToDo;
