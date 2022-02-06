import { FC } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const Container = styled.main`
  flex-grow: 1;
  padding: 12px;

  @media only screen and (min-width: 480px) {
    padding: 24px;
  }

  @media only screen and (min-width: 768px) {
    padding: 32px;
  }
`;

const StyledTodoCounter = styled.h2`
  margin-bottom: 18px;
  margin-top: 6px;
  font-size: 0.875rem;
`;

const Content: FC = () => {
  return (
    <Container>
      <StyledTodoCounter>Your have 2 tasks to complete!</StyledTodoCounter>
      <TodoList />
    </Container>
  );
};

export default Content;
