import React from "react";
import CreateTodo from "../components/CreateTodo";
import { Container } from "react-bootstrap";

const TaskPage = () => {
  return (
    <Container className="pt-3">
      <span className="text-white fs-5">Todo React-Redux</span>
      <CreateTodo />
    </Container>
  );
};

export default TaskPage;
