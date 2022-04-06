import "./App.css";
import "./Content";
import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

//
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
// import { useState } from "react";
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default App;
