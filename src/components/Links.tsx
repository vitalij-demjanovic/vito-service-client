export default function Links() {
  const links: string[] = ["Home", "Sklad"];

  return (
    <>
      <ul className="items-center hidden md:flex">
        {links.map((link, index) => (
          <li className="mr-3 last:mr-0" key={index}>
            {link}
          </li>
        ))}
      </ul>
    </>
  );
}
