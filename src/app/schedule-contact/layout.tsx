import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Whisper } from "next/font/google";
import { Suspense } from "react";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const whisper = Whisper({
  subsets: ["latin"],
  variable: "--font-whisper",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Alex studio | Schedule & Contact",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${whisper.variable}`}>
      <Suspense fallback={<div></div>}>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
      </Suspense>
    </html>
  );
}
