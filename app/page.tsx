import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
  <div className="relative w-full h-60 flex items-center justify-center" >

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
  className="group relative z-10 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-start w-32 h-32"
  target="_blank"
  rel="noopener noreferrer"
  style={{ padding: "8px" }}
>
  {/* Image that displays on hover */}
  <img
        src="/dextools-logo.svg"
        alt="Dextools Logo"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 opacity-100 transition-opacity duration-300 group-hover:opacity-100 z-10"
    style={{ mixBlendMode: 'multiply' }}
  />
</a>
  
    <a
  href="https://linktr.ee/brettgoldsol"
  className="group relative z-10 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-start w-32 h-32"
  target="_blank"
  rel="noopener noreferrer"
  style={{ padding: "8px" }}
>
  {/* Image that displays on hover */}
  <img
   src="/linktree-logo.svg"
        alt="Linktree Logo"
     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 opacity-100 transition-opacity duration-300 group-hover:opacity-100 z-10"
    style={{ mixBlendMode: 'multiply' }}
  />
</a>

    <a
  href="https://x.com/GOLDENBRETTSOL"
  className="group relative z-10 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-start w-32 h-32"
  target="_blank"
  rel="noopener noreferrer"
  style={{ padding: "8px" }}
>
  {/* Image that displays on hover */}
  <img
    src="/twitter-logo.svg"
    alt="Twitter Logo"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7/11 opacity-100 transition-opacity duration-300 group-hover:opacity-100 z-10"
    style={{ mixBlendMode: 'multiply' }}
  />
</a>




<Link href="/sokoban-gold" passHref>
  <div className="group relative z-10 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-yellow-400 hover:dark:border-yellow-400 hover:dark:bg-green-500 flex items-start justify-start w-32 h-32">
    {/* Image that displays on load */}
    <img
      src="/pow-logo.svg"
      alt="Linktree Logo"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 opacity-100 transition-opacity duration-300 group-hover:opacity-100 z-10"
      style={{ mixBlendMode: 'multiply' }}
    />
  </div>
</Link>




  </div>

  {/* Spacer */}
  <div style={{ height: '40px' }}></div>
</main>

  );
}
