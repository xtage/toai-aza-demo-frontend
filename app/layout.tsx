import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./Toqi.css"
import ChatbotToggle from "@/components/ChatbotToggle";
import ToqiChatbot from "@/components/ToqiChatbot";
import Script from "next/script";
import { CategoryProvider } from "@/context/CategoryContext";
import CategoryInjector from "@/components/CategoryInjector";
import ToqiScriptReloader from "@/components/ToqiScriptReloader";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toqi Azafashions Demo",
  description: "Demo store for azahfashions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://static3.azafashions.com/" />
        <link rel="dns-prefetch" href="https://static3.azafashions.com/" />
        <link rel="stylesheet" href="/css/012a2a8951d52573.css" />
        <link rel="stylesheet" href="/css/11f44d5750bb1e97.css" />
        <link rel="stylesheet" href="/css/120f28e99dab60b3.css" />
        <link rel="stylesheet" href="/css/274a490f4a56c326.css" />
        <link rel="stylesheet" href="/css/306dbccddd04c8aa.css" />
        <link rel="stylesheet" href="/css/32576fdc345408a0.css" />
        <link rel="stylesheet" href="/css/3a79f098e2d77608.css" />
        <link rel="stylesheet" href="/css/51a19f35ead14257.css" />
        <link rel="stylesheet" href="/css/5784a8bf528fd88f.css" />
        <link rel="stylesheet" href="/css/5ceb05cbc74ad257.css" />
        <link rel="stylesheet" href="/css/63e397453ffe9832.css" />
        <link rel="stylesheet" href="/css/76c332062ffa4959.css" />
        <link rel="stylesheet" href="/css/79cf3718a8cf16fa.css" />
        <link rel="stylesheet" href="/css/9793ac7771516c7e.css" />
        <link rel="stylesheet" href="/css/9f320d0ce46d9133.css" />
        <link rel="stylesheet" href="/css/9f580d9954670f23.css" />
        <link rel="stylesheet" href="/css/a667d22b64d0c0d0.css" />
        <link rel="stylesheet" href="/css/ac38a033ad9e740e.css" />
        <link rel="stylesheet" href="/css/b28ed91ac3df82e4.css" />
        <link rel="stylesheet" href="/css/b945e7652cd543c0.css" />
        <link rel="stylesheet" href="/css/bfb2cd44ec9842fa.css" />
        <link rel="stylesheet" href="/css/c368b8e6b04406e6.css" />
        <link rel="stylesheet" href="/css/e2d373631b2e3010.css" />
        <link rel="stylesheet" href="/css/f0cb04b6bcd5950a.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CategoryProvider>
          {children}
          <CategoryInjector />
          <ToqiChatbot />
          <ChatbotToggle />
          <ToqiScriptReloader />
          <Script src="/toqi-script.js" strategy="afterInteractive" />
        </CategoryProvider>

      </body>
    </html>
  );
}
