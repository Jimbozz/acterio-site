import React from "react";
import NavBar from "./NavBar";

function Layout(props) {
  return (
    <div className="wrapper">
      <NavBar />
      <main className="container py-5">{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
