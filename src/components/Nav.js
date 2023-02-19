import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 header">
      <Link className="navbar-brand" to="/">
        MERN TODO
      </Link>
    </nav>
  );
}
