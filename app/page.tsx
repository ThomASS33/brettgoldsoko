import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-gradient-to-b from-ebc72b to-2e9a35">
  <div className="relative z-[1] flex place-items-center">
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/brettGold-logo.png"
      alt="BrettGold Logo"
      width={400}
      height={37}
      priority
    />
  </div>

  {/* Spacer */}
  <div style={{ height: '10px' }}></div>

  <div className="mb-32 grid gap-4 justify-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    <a
      href="https://www.dextools.io/app/en/solana/pair-explorer/Gs6R82BqziwMW5HbEnkzToPmJfH2x6Ucy8gXFvvF6wwj?t=1721220326476"
      className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-start"
      target="_blank"
      rel="noopener noreferrer"
      style={{ padding: "8px" }}
    >
      <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0 custom-font">
        <h2 className="mb-3 text-2xl font-semibold text-left font-custom">
          $BrettGold{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 text-left font-custom">
          Follow to view now on Dextools.io
        </p>
      </div>
      {/* Image that displays when hovered */}
      <img
        src="/dextools-logo.svg"
        alt="Dextools Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{ mixBlendMode: 'multiply' }}
      />
    </a>

    <a
      href="https://linktr.ee/brettgoldsol"
      className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-start"
      target="_blank"
      rel="noopener noreferrer"
      style={{ padding: "8px" }}
    >
      <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0 custom-font">
        <h2 className="mb-3 text-2xl font-semibold font-custom">
          #BrettGold{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 font-custom">
          Follow to Linktr.ee
        </p>
      </div>
      {/* Image that displays when hovered */}
      <img
        src="/linktree-logo.svg"
        alt="Linktree Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{ mixBlendMode: 'multiply' }}
      />
    </a>

    <a
  href="https://x.com/GOLDENBRETTSOL"
  className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-start"
  target="_blank"
  rel="noopener noreferrer"
  style={{ padding: "8px" }}
>
  {/* Image that displays on load */}
  <img
    src="/twitter-logo.svg"
    alt="Twitter Logo"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 opacity-100 transition-opacity duration-300 z-20"
    style={{ mixBlendMode: 'multiply' }}
  />
  <div className="relative z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 custom-font">
    <h2 className="mb-3 text-2xl font-semibold text-left">
      #BrettGold{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className="m-0 max-w-[30ch] text-sm opacity-50 text-left">
      Follow to Twitter
    </p>
  </div>
</a>

    <Link href="/sokoban-gold" passHref>
  <div className="group relative z-10 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-start" style={{ padding: "8px" }}>
    {/* Image that displays on load */}
    <img
      src="/pow-logo.svg"
      alt="Linktree Logo"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 opacity-100 transition-opacity duration-300 z-0 group-hover:opacity-0"
      style={{ mixBlendMode: 'multiply' }}
    />

    {/* Text that appears on hover */}
    <div className="relative custom-font opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
      <h2 className="mb-3 text-2xl font-semibold text-left">
        Sokoban Gold{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50 text-left">
        PoW loading...
      </p>
    </div>
  </div>
</Link>



  </div>

  {/* Spacer */}
  <div style={{ height: '40px' }}></div>
</main>

  );
}
