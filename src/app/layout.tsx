import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Whisper } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
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
  title: "alex-studio",
  description: "alex의 사진 스튜디오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${whisper.variable}`}>
      <head>
        <meta property="og:title" content="ALEX studio" />
        <meta property="og:description" content="ALEX studio" />
        <meta
          property="og:image"
          content="https://s3.ap-northeast-2.amazonaws.com/battlecode.shop/alex_logo_mobile.jpg"
        />
        <meta property="og:url" content={process.env.SITE_URL} />
        <meta property="og:type" content="website" />

        {/* Kakao */}
        <meta property="kakao:site" content="ALEX studio" />
        <meta
          property="kakao:image"
          content="https://s3.ap-northeast-2.amazonaws.com/battlecode.shop/alex_logo_mobile.jpg"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
