import { FC } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Back from "../Back";
import Content from "../Content";
import Footer from "../Footer";
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

const EditTodo: FC = () => {
  const { todoId } = useParams();

  // Get the todo based on the ID from the url parameter
  const todo = useSelector((state: RootStateOrAny) => {
    const currentTodoId = todoId !== undefined ? parseInt(todoId) : 0;
    return state.todos.find((todo: Todo) => todo.id === currentTodoId);
  });

  return (
    <Container>
      <Back />
      <TodoForm todo={todo} />
    </Container>
  );
};

export default EditTodo;
