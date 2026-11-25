import Project from "@/components/project";

export default function Blogs() {
  return (
    <div className="flex-1">
      <div className="flex-1 flex flex-col min-h-full">
        {/* Projects */}
        <div className="flex-1 items-center mt-20 flex flex-col font-sans font-black text-2xl text-stone-300 gap-4 uppercase relative z-0">
          {PROJECTS.map((p, i) => (
            <Project key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    name: "Binomial",
    tech: ["react native", "Laravel"],
    url: "https://apps.apple.com/us/app/binomial/id6764423774",
  },
  {
    name: "Birdwise",
    tech: ["react native", "Laravel"],
    url: "https://apps.apple.com/us/app/birdwise/id6760843072",
  },
  {
    name: "The Pennington Co",
    tech: ["nextjs", "framer"],
    url: "https://www.thepennington.co",
  },
];
