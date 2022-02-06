import { FC, MouseEvent, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ActionButton from "./ActionButton";

const StyledTodo = styled.li<{ isCompleted: boolean }>`
  display: grid;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.greyOne};
  margin-bottom: 8px;
  border-radius: 6px;
  align-items: center;
  grid-template-areas:
    "title title title"
    "date date actions";
  opacity: ${(props) => (props.isCompleted ? 0.5 : 1)};
  transition: opacity 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    text-decoration: ${(props) =>
      props.isCompleted ? "line-through" : "none"};
    word-break: break-word;
  }

  @media only screen and (min-width: 480px) {
    padding: 24px;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 4fr 2.5fr 1fr;
  }
`;

const StyledActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: actions;

  button {
    &:first-child {
      margin-right: 4px;
    }

    padding: 0;
  }

  @media only screen and (min-width: 768px) {
    grid-area: unset;
  }
`;

const StyledTitle = styled.h3`
  grid-area: title;
  margin-bottom: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primaryDark};
  @media only screen and (min-width: 768px) {
    grid-area: unset;
    margin-bottom: 0;
  }
`;

const StyledDate = styled.span`
  grid-area: date;
  color: ${(props) => props.theme.colors.greyThree};
  font-size: 0.75rem;
  @media only screen and (min-width: 768px) {
    grid-area: unset;
    text-align: right;
  }
`;

interface Props {
  onRemoveClick: (todo: Todo) => void;
  onCompleteClick: (todo: Todo) => void;
  todo: Todo;
}

const TodoItem: FC<Props> = ({ onRemoveClick, onCompleteClick, todo }) => {
  const navigate = useNavigate();

  // Navigates to the 'Edit todo' page
  const handleEditTodoClick = () => {
    if (todo.completedDate) return;

    navigate(`/edit/${todo.id}`);
  };

  // Removes the item from the todo list
  const handleRemoveTodoClick = () => {
    onRemoveClick(todo);
  };

  // Marks the item as completed
  const handleCompleteTodoClick: MouseEventHandler<HTMLLIElement> = (
    e: MouseEvent
  ) => {
    const target = e.target as HTMLLIElement;
    if (target.classList.contains("action-btn") || target.tagName === "IMG")
      return;

    onCompleteClick(todo);
  };

  const getFormattedDate = () => {
    return todo.date.toLocaleString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  return (
    <StyledTodo
      isCompleted={todo.completedDate ? true : false}
      onClick={handleCompleteTodoClick}
    >
      <StyledTitle>{todo.name}</StyledTitle>
      <StyledDate>Due date {getFormattedDate()}</StyledDate>
      <StyledActionGroup>
        <ActionButton
          onClick={handleEditTodoClick}
          imagePath="/images/edit.svg"
        />
        <ActionButton
          onClick={handleRemoveTodoClick}
          imagePath="/images/remove.svg"
        />
      </StyledActionGroup>
    </StyledTodo>
  );
};

export default TodoItem;
