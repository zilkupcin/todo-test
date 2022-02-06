import { FC, useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { actionCreators } from "../state";
import Modal from "./Modal";
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
  margin-bottom: 32px;
  margin-top: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.colors.greyThree};
`;

const Content: FC = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const todos = useSelector((state: RootStateOrAny) => state.todos);
  const isTargetAchieved = useSelector(
    (state: RootStateOrAny) => state.isTargetAchieved
  );
  const dispatch = useDispatch();

  const { removeTodo, completeTodo, setTargetAchieved } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleRemoveTodo = (todo: Todo) => {
    removeTodo(todo);
  };

  const handleCompleteTodo = (todo: Todo) => {
    completeTodo(todo);
  };

  const getIncompleteTaskCount = () => {
    return todos.filter((todo: Todo) => !todo.completedDate).length;
  };

  useEffect(() => {
    if (isTargetAchieved) return;

    const tasksCompletedToday = todos.filter((todo: Todo) => {
      const today = new Date();

      return (
        today.getDate() === todo.completedDate?.getDate() &&
        today.getMonth() === todo.completedDate?.getMonth() &&
        today.getFullYear() === todo.completedDate?.getFullYear()
      );
    }).length;

    if (tasksCompletedToday === 3) {
      setIsModalShown(true);
      setTargetAchieved();
    }
  }, [todos]);

  const handleModalClose = () => {
    setIsModalShown(false);
  };

  const incompleteTaskCount = getIncompleteTaskCount();

  return (
    <Container>
      <StyledTodoCounter>
        {incompleteTaskCount === 0
          ? "You have no tasks to complete!"
          : `Your have ${incompleteTaskCount} tasks to complete`}
      </StyledTodoCounter>
      <TodoList
        todos={todos}
        onRemoveClick={handleRemoveTodo}
        onCompleteClick={handleCompleteTodo}
      />
      {isModalShown && <Modal onClose={handleModalClose} />}
    </Container>
  );
};

export default Content;
