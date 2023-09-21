import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.tsx";

export default function DashboardLayout() {
  return (
    <div>
      <NavBar />
      <div className="mt-14">
        <Outlet />
      </div>
    </div>
  );
}
