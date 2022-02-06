import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  padding: 24px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    img {
      width: 16px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  @media only screen and (min-width: 768px) {
    position: relative;
    padding: 0 24px 24px 24px;

    button {
      width: 52px;
      height: 52px;

      img {
        width: 18px;
      }
    }
  }
`;

interface Props {}

const Footer: FC<Props> = () => {
  const navigate = useNavigate();

  const handleAddItemClick = () => {
    navigate("/add");
  };
  return (
    <SyledFooter>
      <button onClick={handleAddItemClick}>
        <img src="/images/add.svg" />
      </button>
    </SyledFooter>
  );
};

export default Footer;
