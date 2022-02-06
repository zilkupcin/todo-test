import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import { useState } from "react";

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

const TodoForm = () => {
  const [error, setError] = useState("");

  const handleDateChange = () => {};

  const handleTodoAdd = () => {};

  return (
    <form>
      <StyledLabel>Task name</StyledLabel>
      <StyledInput type="text" />
      <StyledLabel>Due date</StyledLabel>
      <ReactDatePicker onChange={handleDateChange} />
      {error && <StyledError>asd</StyledError>}
      <Button onClick={handleTodoAdd} title="Add task" />
    </form>
  );
};

export default TodoForm;
