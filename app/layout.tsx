import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Portfolio | Olena Arkhipova",
  description: "Portfolio of Olena Arkhipova, a software engineer specializing in frontend and backend development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
