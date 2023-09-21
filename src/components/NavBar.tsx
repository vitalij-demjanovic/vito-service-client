import Logo from "../ui/Logo.tsx";
import Welcome from "../ui/Welcome.tsx";
import Links from "./Links.tsx";
import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  Bars4Icon,
} from "@heroicons/react/24/solid";
import MobileLinks from "./MobileLinks.tsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispath } from "../store/store.ts";
import { useNavigate } from "react-router-dom";
import { userActions } from "../store/user/user.slice.ts";
import { useGetUserDataQuery } from "../store/api/user.service.ts";

export default function NavBar() {
  const { data } = useGetUserDataQuery("");
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch<AppDispath>();

  const handleOpen = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  const handleLogout = () => {
    dispatch(userActions.logout());
    navigate("/auth/login");
  };

  return (
    <div className="bg-primary fixed top-0 w-full">
      <nav className=" container py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Logo appearance={"small"} />
          <Welcome name={data && data.login} />
        </div>
        <div className="flex items-center">
          <Links />
          <UserCircleIcon className="text-third h-8 w-8 ml-5 cursor-pointer" />
          <ArrowRightOnRectangleIcon
            onClick={handleLogout}
            className="text-third h-8 w-8 ml-5 cursor-pointer"
          />
          <Bars4Icon
            onClick={handleOpen}
            className="text-third h-8 w-8 ml-5 cursor-pointer md:hidden "
          />
        </div>
      </nav>
      <MobileLinks open={openMenu} closed={() => setOpenMenu(false)} />
    </div>
  );
}
