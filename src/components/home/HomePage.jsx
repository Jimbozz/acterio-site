import React from "react";
import Layout from "../../layout/Layout";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <Layout>
      <div className="py-5 text-center">
        <h1 className="fw-bold">This is the Homepage</h1>
        <p>
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

export default HomePage;
