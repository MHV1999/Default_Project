import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      {/* Sidebar Component - Fixed */}
      <Sidebar />
    </div>
  );
}