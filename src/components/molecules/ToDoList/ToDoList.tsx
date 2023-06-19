import React, { useState } from "react";
import "./_todolist.scss";

const ToDoList = ({ toDos }: { toDos: string[] }) => {
  const [clickedItem, setClickedItem] = useState<boolean>(false);

  return (
    <ul className="todolist">
      {toDos.map((toDo: string, id: number) => (
        <li
          key={id}
          className={`px--64 py--4 mb--8 ${clickedItem ? "clicked" : ""}`}
          onClick={() => setClickedItem(true)}
        >
          {toDo}
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
