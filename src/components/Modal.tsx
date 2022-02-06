import { FC } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

interface Props {
  onClose: () => void;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const StyledModal = styled.div`
  position: relative;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  margin: 12px;

  h4 {
    margin-bottom: 18px;
    font-weight: 700;
    font-size: 1.175rem;
  }

  p {
    margin-bottom: 18px;
  }

  button {
    cursor: pointer;
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.primaryDark};
    padding: 12px 48px;
    color: #fff;
    font-weight: 700;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Modal: FC<Props> = ({ onClose }) => {
  const modalEl = document.getElementById("modal") as HTMLElement;

  return ReactDOM.createPortal(
    <Container>
      <StyledModal>
        <h4>Goal achieved!</h4>
        <p>
          Congratulations you've completed 3 tasks today and achieved your goal!
        </p>
        <button onClick={onClose}>Close</button>
      </StyledModal>
    </Container>,
    modalEl
  );
};

export default Modal;
