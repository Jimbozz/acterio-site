import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <div className="wrapper">
      <NavBar />
      <main className="container py-5">{props.children}</main>
      <footer className="d-flex justify-content-center">
        <small>&copy;Copyright</small>
      </footer>
    </div>
  );
}
