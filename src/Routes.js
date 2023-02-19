import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodosList from "./components/TodosList";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";

function Routes() {
  return (
      <>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        </>
  );
}

export default Routes;
