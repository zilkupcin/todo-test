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

  // Get all stored todos
  const todos = useSelector((state: RootStateOrAny) => state.todos);

  const isTargetAchieved = useSelector(
    (state: RootStateOrAny) => state.isTargetAchieved
  );
  const dispatch = useDispatch();

  // Combine action creators
  const { removeTodo, completeTodo, setTargetAchieved } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // Removes a todo item from the list
  const handleRemoveTodo = (todo: Todo) => {
    removeTodo(todo);
  };

  // Marks item as complete
  const handleCompleteTodo = (todo: Todo) => {
    completeTodo(todo);
  };

  // Gets how many items are still not completed
  const getIncompleteTaskCount = () => {
    return todos.filter((todo: Todo) => !todo.completedDate).length;
  };

  // Check if the goal of 3 completed tasks today was achieved
  useEffect(() => {
    if (isTargetAchieved) return;

    // Get the number of completed tasks today
    const tasksCompletedToday = todos.filter((todo: Todo) => {
      const today = new Date();

      return (
        today.getDate() === todo.completedDate?.getDate() &&
        today.getMonth() === todo.completedDate?.getMonth() &&
        today.getFullYear() === todo.completedDate?.getFullYear()
      );
    }).length;

    // Show the 'goal achieved' modal
    if (tasksCompletedToday === 3) {
      setIsModalShown(true);
      setTargetAchieved();
    }
  }, [todos]);

  // Close the 'goal achieved' modal
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
