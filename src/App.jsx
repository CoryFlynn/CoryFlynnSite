import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";

const AppWrap = styled.div`
  text-align: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;


function App() {
  return (
    <AppWrap>
      <Home />
    </AppWrap>
  );
}

export default App;
