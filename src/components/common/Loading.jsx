import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center">
      <div className="loader-spinner">
        <Spinner animation="border" role="status" />
      </div>
    </div>
  );
}
