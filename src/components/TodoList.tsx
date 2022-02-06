import { FC } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  return (
    <ul>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

export default TodoList;
