import Theme from "./components/Theme";
import Header from "./components/Header";
import styled from "styled-components";
import "./styles/reset.css";

import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/pages/AddTodo";
import EditTodo from "./components/pages/EditTodo";
import Home from "./components/pages/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #fff;

  @media only screen and (min-width: 768px) {
    height: auto;
    max-width: 700px;
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:todoId" element={<EditTodo />} />
          <Route path="/add/" element={<AddTodo />} />
        </Routes>
      </Container>
    </Theme>
  );
}

export default App;
