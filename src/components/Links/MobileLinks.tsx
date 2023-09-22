import cn from "classnames";
import { links } from "./links.ts";
import { Link } from "react-router-dom";

interface MobileLinksI {
  open: boolean;
  closed: () => void;
}
export default function MobileLinks({ open, closed }: MobileLinksI) {
  return (
    <>
      <ul
        className={cn("bg-white container overflow-hidden", {
          "h-0": !open,
          "h-fit": open,
        })}
      >
        {links.map((link, index) => (
          <li className="py-3 " key={index} onClick={closed}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
