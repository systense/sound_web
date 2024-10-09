import Link from "next/link";

export const Header = async () => {
  return (
    <header className="mb-[15px] mt-[-2px] md:min-w-[120px] md:w-[18%]">
      <div className="space-y-[10px] md:sticky md:top-[8px]">
        <Link href="/projects">Blind Whales</Link>
        <nav>
          <ul>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/commercials">Commercials</Link>
            </li>
            <li>
              <Link href="/music-library">Music Library</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
