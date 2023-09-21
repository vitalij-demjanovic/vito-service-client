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

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  return (
    <div className="bg-primary">
      <nav className=" container py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Logo appearance={"small"} />
          <Welcome />
        </div>
        <div className="flex items-center">
          <Links />
          <UserCircleIcon className="text-third h-8 w-8 ml-5 cursor-pointerň" />
          <ArrowRightOnRectangleIcon className="text-third h-8 w-8 ml-5 cursor-pointer" />
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
