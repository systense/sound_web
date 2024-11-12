"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderLinks = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <>
      <li>
        <Link
          className={pathname === "/projects" ? "no-underline" : ""}
          href="/projects"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/films" ? "no-underline" : ""}
          href="/films"
        >
          Films
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/commercials" ? "no-underline" : ""}
          href="/commercials"
        >
          Commercials
        </Link>
      </li>
      {/* <li>
        <Link
          className={pathname === "/music-library" ? "no-underline" : ""}
          href="/music-library"
        >
          Music Library
        </Link>
      </li> */}
    </>
  );
};
