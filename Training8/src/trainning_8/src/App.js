import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthenPage from './modules/authen/AuthenPage';
import MainPage from './modules/main/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/authenticate">
          <AuthenPage />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
        <Redirect to={'/authenticate'} />
      </Switch>
    </Router>
    
  );
}

export default App;
