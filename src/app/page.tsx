export default function Home() {
  return (
    <div className="md:py-[100px] py-[50px]">
      <div className="md:max-w-1/2 max-w-3/4 m-auto flex flex-col gap-[64px]">
        <div>
          <h1 className="font-bold italic">Trevor Pennington</h1>
          <div className="pt-[20px]">
            <p className="font-light">
              Director of mobile apps at{" "}
              <a href="https://few.io/" target="_blank" className="underline">
                few.io
              </a>
            </p>
            <p className="font-light">TS / React Native / Swift</p>
            <p className="font-light">Raleigh, NC</p>
          </div>
        </div>

        {/* projects */}
        <div className="self-start">
          <h1 className="font-bold italic">Current projects</h1>
          <div className="pt-[20px] flex-col flex gap-4">
            <a href="https://www.thepennington.co/" target="_blank">
              <p className="underline">The Pennington Co</p>
              <p className="text-xs pt-1">
                portfolio wedding photography website
              </p>
            </a>

            <a
              href="https://apps.apple.com/us/app/devdex/id6478421422"
              target="_blank"
            >
              <p className="underline">devdex</p>
              <p className="text-xs pt-1">
                iOS app for staying sharp on programming syntax
              </p>
            </a>
          </div>
        </div>

        {/* say hello */}
        <div className="self-start">
          <h1 className="font-bold italic">👋 Say hello</h1>
          <div className="pt-[20px]">
            <a href="https://github.com/TrevPennington" target="_blank">
              <p className="underline">Github</p>
            </a>

            <a href="https://www.instagram.com/trevpennington" target="_blank">
              <p className="underline">Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
