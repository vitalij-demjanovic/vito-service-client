import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.tsx";

export default function DashboardLayout() {
  return (
    <div>
      <NavBar />
      <div className="mt-20">
        <Outlet />
      </div>
    </div>
  );
}
