import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition all 0.2s ease-in-out;

  &:hover {
      opacity: 0.6
  }

  img {
      width: 24px;
  }
`;

interface Props {
  imagePath: string;
}

const ActionButton: FC<Props> = ({ imagePath }) => {
  return (
    <StyledButton>
      <img src={imagePath} />
    </StyledButton>
  );
};

export default ActionButton;
