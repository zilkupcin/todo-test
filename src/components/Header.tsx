import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.primary};

  h1 {
    position: relative;
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
    color: white;
    z-index: 10;
  }

  img {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Todo</h1>
      <img src="/wave.svg"></img>
    </StyledHeader>
  );
};

export default Header;
