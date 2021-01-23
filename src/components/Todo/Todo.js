import React, { useState } from "react";

import AddNew from "../AddNew/AddNew";
import TodoList from "../List/TodoList";

const Todo = () => {
  const [list, setList] = useStickyState([], "alexTodo");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      return;
    }

    // Add the list item.
    setList([
      ...list,
      {
        value: inputValue,
        date: Date.now(),
        completed: false,
      },
    ]);

    setInputValue("");
  };

  const handleInput = (input) => {
    setInputValue(input.target.value);
  };

  const deleteItem = (index) => {
    let listCopy = [...list];
    listCopy.splice(index, 1);

    setList(listCopy);
  };

  const updateList = (element, index) => {
    let listCopy = [...list];
    listCopy[index].completed = !element.completed;

    setList(listCopy);
  };

  return (
    <div className="todoList">
      <h1>The List</h1>
      <p>
        🎉 My first try at writing a <strong>TODO app</strong> in React using
        Material UI
      </p>
      <AddNew
        inputValue={inputValue}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <TodoList
        handleDelete={deleteItem}
        handleClick={updateList}
        list={list}
      />
    </div>
  );
};

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default Todo;
