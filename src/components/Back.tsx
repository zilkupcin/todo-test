import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;

    img {
      transform: translateX(-4px);
    }
  }

  img {
    margin-right: 12px;
    transition: all 0.2s ease-in-out;
  }

  span {
    font-weight: 700;
    margin-top: 4px;
  }
`;

const Back: FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <Container onClick={handleBackClick}>
      <img src="/images/back.svg" />
      <span>Go back</span>
    </Container>
  );
};

export default Back;
