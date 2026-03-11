import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function DashboardLayout() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;