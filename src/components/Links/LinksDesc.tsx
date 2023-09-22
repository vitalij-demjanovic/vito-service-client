import { Link } from "react-router-dom";
import { links } from "./links.ts";

export default function LinksDesc() {
  return (
    <>
      <ul className="items-center hidden md:flex">
        {links.map((link, index) => (
          <li className="mr-3 last:mr-0" key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
