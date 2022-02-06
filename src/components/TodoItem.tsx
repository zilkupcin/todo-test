import { FC } from "react";
import styled from "styled-components";
import ActionButton from "./ActionButton";

const StyledTodo = styled.li`
  display: grid;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.greyOne};
  margin-bottom: 8px;
  border-radius: 6px;
  align-items: center;
  grid-template-areas:
    "title title title"
    "date date actions";
  transition: opacity 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 0;
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

  @media only screen and (min-width: 768px) {
    grid-area: unset;
  }
`;

const StyledTitle = styled.h3`
  grid-area: title;
  margin-bottom: 12px;

  @media only screen and (min-width: 768px) {
    grid-area: unset;
    margin-bottom: 0;
  }
`;

const StyledDate = styled.span`
  grid-area: date;

  @media only screen and (min-width: 768px) {
    grid-area: unset;
    text-align: right;
  }
`;

const TodoItem: FC = () => {
  return (
    <StyledTodo>
      <StyledTitle>Item name</StyledTitle>
      <StyledDate>Due date 02/02/2022</StyledDate>
      <StyledActionGroup>
        <ActionButton imagePath="/images/edit.svg" />
        <ActionButton imagePath="/images/remove.svg" />
      </StyledActionGroup>
    </StyledTodo>
  );
};

export default TodoItem;
