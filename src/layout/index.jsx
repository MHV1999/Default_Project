// layout.jsx
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}