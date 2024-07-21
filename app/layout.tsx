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
        {children}
        
        {/* Empty canvas element for the matrix animation */}
        <canvas id="matrixCanvas" className="fixed top-0 left-0 w-10 h-10 z-0"></canvas>
        
        {/* Include your script here */}
        <Script src="/matrixAnimation.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
