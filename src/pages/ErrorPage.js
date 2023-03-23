import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>Ooops... You entered wrong page</h1>
      <Link to="/">
        <button className="btn-primary">Go Back To Home Page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
