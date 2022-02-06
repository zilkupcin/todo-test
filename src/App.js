import Theme from "./components/Theme";
import Header from "./components/Header";
import styled from "styled-components";
import "./reset.css";
import Footer from "./components/Footer";
import Content from "./components/Content";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #fff;

  @media only screen and (min-width: 768px) {
    height: auto;
    max-width: 800px;
    min-height: 500px;
    margin: 0 24px;
    border-radius: 8px;
    box-shadow: 4px 4px 15px rgba(231, 231, 231, 0.4);
    overflow: hidden;
  }
`;

function App() {
  return (
    <Theme>
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </Theme>
  );
}

export default App;
