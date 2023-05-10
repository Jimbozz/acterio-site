import Layout from "../../layout/Layout";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <Layout>
      <div className="py-5 text-center d-flex align-items-center flex-column justify-content-center h-100">
        <h1 className="fw-bold">Welcome to our blog!</h1>
        <p className="content-width">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/posts"
          className="btn btn-primary"
          data-bs-toggle="button"
          aria-pressed="true">
          View posts
        </NavLink>
      </div>
    </Layout>
  );
}
