import Link from "next/link";

export default function Project({
  name,
  tech,
  url,
}: {
  name: string;
  tech: string[];
  url: string;
}) {
  return (
    <span className="group relative inline-block z-0 sm:hover:z-20 bg-white dark:bg-transparent">
      <Link href={url ?? ""} target="_blank">
        {/* <h1 className="cursor-pointer sm:hover:text-black transition-all relative z-10 sm:group-hover:z-30 text-stone-700 dark:text-stone-100 "> */}
        <h1 className="cursor-pointer transition-all relative z-10 sm:group-hover:z-30 text-white dark:text-white mix-blend-difference">
          {name}
        </h1>
      </Link>
      <div
        className="
  absolute top-[-40px] left-1/2 z-20
  opacity-0 invisible pointer-events-none
  sm:group-hover:opacity-100 sm:group-hover:visible
  transition-all duration-300 delay-100

  rotate-0 group-hover:rotate-8
  -translate-y-10 group-hover:translate-y-0
  bg-black dark:bg-white p-3 text-sm whitespace-nowrap
  h-30 w-60 flex items-end justify-end flex-col
  text-white dark:text-black
"
      >
        {tech.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </span>
  );
}
