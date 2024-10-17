import Link from "next/link";
import { HeaderLinks } from "./HeaderLinks";

export const Header = async () => {
  return (
    <header className="mb-[15px] md:min-w-[125px] md:w-[18%] md:mt-[-3px]">
      <div className="space-y-[10px] md:sticky md:top-[40px]">
        <Link className="no-underline" href="/projects">
          Falling Whale
        </Link>
        <nav>
          <ul>
            <HeaderLinks />
            <li>
              <Link
                href="https://drive.google.com/drive/folders/1BVr9bX8ZgB0QySo7xUj5GW2x26aYwjWu"
                target="_blank"
              >
                Music Library
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
