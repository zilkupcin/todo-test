import { FC } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

interface Props {
  todos: Array<Todo>;
  onRemoveClick: (todo: Todo) => void;
  onCompleteClick: (todo: Todo) => void;
}

const StyledTodoList = styled.ul`
  @media only screen and (min-width: 768px) {
    overflow-y: auto;
    max-height: 500px;
  }
`;

const TodoList: FC<Props> = ({ todos, onRemoveClick, onCompleteClick }) => {
  return (
    <StyledTodoList>
      {todos.map((todo: Todo, index: number) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemoveClick={onRemoveClick}
            onCompleteClick={onCompleteClick}
          />
        );
      })}
    </StyledTodoList>
  );
};

export default TodoList;
