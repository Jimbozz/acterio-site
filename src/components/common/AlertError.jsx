import Alert from "react-bootstrap/Alert";

export default function AlertError({ children }) {
  return (
    <Alert key="danger" variant="danger">
      {children}
    </Alert>
  );
}
