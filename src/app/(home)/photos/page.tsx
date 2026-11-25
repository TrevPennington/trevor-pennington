export default function Photos() {
  return (
    <div className="flex-1 flex justify-center px-6 py-20">
      <div className="flex flex-col items-center text-center gap-5 lg:gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-stone-300 dark:border-stone-700 px-3.5 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-500 dark:text-stone-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stone-500 dark:bg-stone-300 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-stone-500 dark:bg-stone-300" />
          </span>
          In progress
        </span>
        <h2 className="font-sans font-black uppercase leading-[0.85] tracking-tighter text-stone-700 dark:text-stone-100 text-[11vw] sm:text-6xl lg:text-7xl">
          Coming
          <br />
          <span className="text-transparent [-webkit-text-stroke:1px_var(--color-stone-700)] dark:[-webkit-text-stroke:1px_var(--color-stone-100)]">
            soon
          </span>
        </h2>
        {/* <p className="font-mono text-xs sm:text-sm font-light text-stone-500 dark:text-stone-300 max-w-[280px] sm:max-w-sm">
          Check back 
        </p> */}
      </div>
    </div>
  );
}
