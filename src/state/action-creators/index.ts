import { Dispatch } from "redux";

export const addTodo = (todo: Todo) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "ADD",
      payload: todo,
    });
  };
};

export const removeTodo = (todo: Todo) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "REMOVE",
      payload: todo,
    });
  };
};

export const editTodo = (todo: Todo) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "EDIT",
      payload: todo,
    });
  };
};

export const completeTodo = (todo: Todo) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "COMPLETE",
      payload: todo,
    });
  };
};

export const setTargetAchieved = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "TARGET_COMPLETE",
      payload: true,
    });
  };
};
