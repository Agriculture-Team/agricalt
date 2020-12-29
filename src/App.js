import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <Switch>
          {/* <Route path="/about">
          <About />
        </Route>*/}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
