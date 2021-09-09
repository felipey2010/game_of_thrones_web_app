import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/page404.css";

export default function Page404() {
  let location = useLocation();
  return (
    <div className="page404-container">
      <p className="page404-text">404</p>
      <p className="page404-description">
        Page <strong>{location.pathname} not found</strong>
      </p>
      <p className="page404-button">
        Return to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}
