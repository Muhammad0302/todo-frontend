import React from "react";
import { Link } from "react-router-dom";

export default function Todo({ todo }) {
  return (
    <tr>
      <td >{todo.todoDesc}</td>
      <td >
        {todo.todoResponsible}
      </td>
      <td >
        {todo.todoPriority}
      </td>
      <td>
        <Link to={`/edit/${todo._id}`}>Edit</Link>
      </td>
    </tr>
  );
}
