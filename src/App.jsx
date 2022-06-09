import React from "react";
import styled from "styled-components";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history'
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

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

// Manually create the history object so we can access outside the Router e.g. in modals
const history = createBrowserHistory()

function App() {
  return (
    <AppWrap>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </AppWrap>
  );
}

export default App;
