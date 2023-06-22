import React, { useState } from "react";
import Heading from "./components/atoms/Heading/Heading";
import AddToDo from "./components/molecules/AddToDo/AddToDo";
import ToDoList from "./components/molecules/ToDoList/ToDoList";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [toDos, setToDos] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<String>("All");

  return (
    <div className="App flex flex--column flex__justify--center flex__align--center">
      <Heading type={"h1"} text={"Glintt's ToDo list"} className="my--32" />
      <AddToDo
        inputValue={inputValue}
        setInputValue={setInputValue}
        toDos={toDos}
        setToDos={setToDos}
        setSelectedOption={setSelectedOption}
      />
      <ToDoList toDos={toDos} selectedOption={selectedOption} />
    </div>
  );
}

export default App;
