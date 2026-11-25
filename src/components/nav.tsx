"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavDescription from "./navDescription";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

export default function Nav() {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  const dev = pathname === "/";
  const photos = pathname === "/photos";

  return (
    <div>
      <div className="flex flex-row gap-3 items-center justify-center text-stone-300 font-black uppercase text-2xl font-sans">
        <button
          type="button"
          aria-label="Switch to dark mode"
          onClick={() => setTheme("dark")}
          className="cursor-pointer transition-all dark:text-stone-100 text-stone-300 hover:text-black dark:hover:text-stone-100"
        >
          <FaMoon />
        </button>
        <button
          type="button"
          aria-label="Switch to light mode"
          onClick={() => setTheme("light")}
          className="cursor-pointer transition-all dark:text-stone-700 text-black dark:hover:text-stone-300"
        >
          <FaSun />
        </button>
        <Link
          href="/"
          replace
          className={`cursor-pointer hover:text-black dark:hover:text-stone-100 transition-all ${dev ? "text-stone-700 dark:text-stone-100" : "dark:text-stone-700"}`}
        >
          projects
        </Link>
        <Link
          href="/photos"
          replace
          className={`cursor-pointer hover:text-black dark:hover:text-stone-100 transition-all ${photos ? "text-stone-700 dark:text-stone-100" : "dark:text-stone-700"}`}
        >
          photos
        </Link>
      </div>
      <div className="lg:self-end self-center pt-2 min-h-[100px] flex justify-center">
        <NavDescription
          description={photos ? PHOTO_DESCRIPTION : DEV_DESCRIPTION}
        />
      </div>
    </div>
  );
}

// Link targets used in descriptions. Edit URLs here.
const LINKS = {
  studio: "https://www.instagram.com/thepennington.co/",
};

// Use [label](url) in a description to render an underlined link.
const PHOTO_DESCRIPTION = `Photos from travels and other fun stuff. Find client work [@thepenningtonco](${LINKS.studio})`;

const DEV_DESCRIPTION =
  "Some personal dev projects. Mostly React Native and Laravel.";
