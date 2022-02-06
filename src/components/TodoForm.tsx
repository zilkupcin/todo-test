import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker-custom-styles.css";
import Button from "./Button";
import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";

const StyledInput = styled.input`
  margin-bottom: 24px;
`;

const StyledLabel = styled.label`
  margin-bottom: 12px;
`;

const StyledError = styled.p`
  color: #ec5757;
  margin-top: 24px;
`;

interface Props {
  todo?: Todo;
}

const TodoForm: FC<Props> = ({ todo }) => {
  const [error, setError] = useState("");
  const [todoData, setTodoData] = useState(
    todo || { name: "", date: new Date() }
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addTodo, editTodo } = bindActionCreators(actionCreators, dispatch);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setTodoData({ ...todoData, name: e.target.value });
  };

  const handleDateChange = (date: Date) => {
    setTodoData({ ...todoData, date });
  };

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!todoData.date || !todoData.name) {
      setError("One of the fields was left empty");
      return;
    }

    if (todo) {
      editTodo({ ...todo, name: todoData.name, date: todoData.date });
    } else {
      addTodo({
        id: Math.floor(Math.random() * 10000),
        name: todoData.name,
        date: todoData.date,
      });
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <StyledLabel>Task name</StyledLabel>
      <StyledInput
        type="text"
        value={todoData.name}
        onChange={handleInputChange}
      />
      <StyledLabel>Due date</StyledLabel>
      <ReactDatePicker onChange={handleDateChange} selected={todoData.date} />
      {error && <StyledError>{error}</StyledError>}
      <Button title={todo ? "Edit task" : "Add task"} />
    </form>
  );
};

export default TodoForm;
