import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const iconProps = {
  // color: "lightGray",
  size: "1.4em",
  className: "hover:fill-black dark:hover:fill-stone-700 dark:fill-stone-100",
};

export default function Social() {
  return (
    <div className="flex flex-row items-center w-full gap-4 text-base font-sans font-light lg:justify-start justify-center">
      <Link
        className="flex flex-row items-center"
        href="https://github.com/TrevPennington"
        target="_blank"
      >
        {/* <p className="hover:underline">Github</p>
        <MdArrowOutward size={"1em"} /> */}
        {/* <FaGithub /> */}
        <FaGithub {...iconProps} />
      </Link>

      <Link
        className="flex flex-row items-center"
        href="https://dribbble.com/trevpennington"
        target="_blank"
      >
        {/* <p className="hover:underline">Dribbble</p>
        <MdArrowOutward size={"1em"} /> */}
        <FaDribbble {...iconProps} />
      </Link>

      <Link
        className="flex flex-row items-center"
        href="https://www.instagram.com/trevpennington"
        target="_blank"
      >
        {/* <p className="hover:underline">Instagram</p>
        <MdArrowOutward size={"1em"} /> */}
        <FaInstagram {...iconProps} />
      </Link>
    </div>
  );
}
