import React from "react";

const ErrorMessage = ({ message }) => {
  return <div> {message || "An error occurred. Please try again."}</div>;
};

export default ErrorMessage;
