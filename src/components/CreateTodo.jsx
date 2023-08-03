import { addTodo } from "../redux/features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TodoList from "./TodoList";
import { Button, Alert } from "react-bootstrap";
const CreateTask = () => {
  const dispatch = useDispatch();
  const todoItem = useSelector((state) => state.todo.value);
  const [input, setInput] = useState("");
  //button handaler
  const handleClick = () => {
    if (input === "") {
      return alert("please type your task");
    }
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <div className="row my-4">
        <div className="col-9 col-md-10">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="form-control bg-dark text-white border-success"
          />
        </div>
        <div className="col-3 col-md-2">
          <Button variant="success" onClick={handleClick}>
            Add Todo
          </Button>
        </div>
      </div>
      {todoItem.length < 1 ? (
        <Alert>Todo not available now</Alert>
      ) : (
        <TodoList todos={todoItem} />
      )}
    </div>
  );
};

export default CreateTask;
