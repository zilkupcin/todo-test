import { FC } from "react";
import styled from "styled-components";

const SyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    padding: 24px;

    button {
      width: 52px;
      height: 52px;

      img {
        width: 18px;
      }
    }
  }
`;

const Footer: FC = () => {
  return (
    <SyledFooter>
      <button>
        <img src="/images/add.svg" />
      </button>
    </SyledFooter>
  );
};

export default Footer;