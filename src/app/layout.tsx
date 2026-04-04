import type { Metadata } from "next";
import { Poppins, Calistoga } from "next/font/google"; // Fix 1: Removed duplicate Poppins
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Providers } from "./providers";

// Fix 2: Added weight to Poppins (it's a variable font but usually requires weights if not specified)
const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"] 
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          "bg-gray-900 text-white antialiased font-sans", // Fix 3: Added base classes
          poppins.variable,
          calistoga.variable
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}