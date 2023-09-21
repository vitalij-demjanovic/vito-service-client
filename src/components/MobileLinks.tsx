import cn from "classnames";

interface MobileLinksI {
  open: boolean;
  closed: () => void;
}
export default function MobileLinks({ open, closed }: MobileLinksI) {
  const links: string[] = ["Home", "Sklad"];

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
            {link}
          </li>
        ))}
      </ul>
    </>
  );
}
