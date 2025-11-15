// layout.jsx
import { Sidebar } from "@/components/ui/sidebar";
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Sidebar />
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