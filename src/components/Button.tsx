import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.input`
  min-width: 200px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: 700;
  border-radius: 24px;
  padding: 16px 24px;
  margin-top: 32px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (min-width: 480px) {
    width: 200px;
  }
`;

interface Props {
  onClick?: () => void;
  title: string;
}

const Button: FC<Props> = ({ onClick, title }) => {
  return (
    <StyledButton type="submit" onClick={onClick} value={title}></StyledButton>
  );
};

export default Button;
