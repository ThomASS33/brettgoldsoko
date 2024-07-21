import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-4">
      <div className="relative w-3/4 h-40 flex items-center justify-center mb-8">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/brettGold-logo.png"
          alt="BrettGold Logo"
          width={400}  // Increased width
          height={74}  // Increased height
          priority
        />
      </div>

      <div className="mb-32 grid gap-4 justify-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.dextools.io/app/en/solana/pair-explorer/Gs6R82BqziwMW5HbEnkzToPmJfH2x6Ucy8gXFvvF6wwj?t=1721220326476"
          
          className="group relative z-10 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-center w-32 h-32"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Image that displays on hover */}
          <img
            src="/dextools-logo.svg"
            alt="Dextools Logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 opacity-100 transition-opacity duration-300 group-hover:opacity-100"
            style={{ mixBlendMode: 'multiply' }}
          />
        </a>

        <a
          href="https://linktr.ee/brettgoldsol"
          className="group relative z-10 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-center w-32 h-32"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Image that displays on hover */}
          <img
            src="/linktree-logo.svg"
            alt="Linktree Logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/4 opacity-100 transition-opacity duration-300 group-hover:opacity-100"
            style={{ mixBlendMode: 'multiply' }}
          />
        </a>

        <a
          href="https://x.com/GOLDENBRETTSOL"
          className="group relative z-10 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-center w-32 h-32"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Image that displays on hover */}
          <img
            src="/twitter-logo.svg"
            alt="Twitter Logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150 opacity-100 transition-opacity duration-300 group-hover:opacity-100"
            style={{ mixBlendMode: 'multiply' }}
          />
        </a>

        <Link href="/sokoban-gold" passHref>
  <div className="group relative z-10 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-center w-32 h-32">
    {/* Image that displays on hover */}
    <img
      src="/pow-logo.svg"
      alt="PoW Logo"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 transition-opacity duration-300 group-hover:opacity-100"
      style={{ width: '100%', height: '100%', mixBlendMode: 'multiply' }}
    />
  </div>
</Link>

      </div>

      {/* Spacer */}
      <div style={{ height: '40px' }}></div>
    </main>
  );
}
