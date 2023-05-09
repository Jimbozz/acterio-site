import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertError({ children }) {
  return (
    <Alert key="danger" variant="danger">
      {children}
    </Alert>
  );
}
