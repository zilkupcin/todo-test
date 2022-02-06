import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 200px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  border-radius: 24px;
  padding: 12px;
  margin-top: 24px;
  background-color: ${(props) => props.theme.colors.primaryDark};
`;

interface Props {
  onClick: () => void;
  title: string;
}

const Button: FC<Props> = ({ onClick, title }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default Button;
