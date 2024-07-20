import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import "../app/globals.css"; // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sokoban Gold",
  description: "a Port of Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Bring the <main> element to the front */}
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        
        {/* Empty canvas element for the matrix animation */}
        <canvas id="matrixCanvas"></canvas>
        
        {/* Include your script here */}
        <Script src="/matrixAnimation.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
