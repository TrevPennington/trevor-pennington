import Social from "@/components/social";
import Nav from "@/components/nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen min-w-full flex flex-col">
      <div className="min-w-full flex lg:flex-row flex-col p-5 px-7 text-black lg:items-start gap-3">
        {/* Layout UI */}
        <div className="flex flex-1 lg:items-start flex-col gap-2 items-center">
          <h1 className="font-sans text-2xl font-black text-stone-700 dark:text-stone-100 uppercase">
            Trevor Pennington
          </h1>
          <Social />
        </div>
        <Nav />
      </div>
      <div className="flex flex-1">{children}</div>
    </div>
  );
}
