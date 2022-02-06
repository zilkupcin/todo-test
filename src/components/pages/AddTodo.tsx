import { FC } from "react";
import styled from "styled-components";
import Back from "../Back";
import TodoForm from "../TodoForm";

const Container = styled.div`
  padding: 12px;

  @media only screen and (min-width: 480px) {
    padding: 24px;
  }

  @media only screen and (min-width: 768px) {
    padding: 32px;
  }
`;

const AddTodo: FC = () => {
  return (
    <Container>
      <Back />
      <TodoForm />
    </Container>
  );
};

export default AddTodo;
