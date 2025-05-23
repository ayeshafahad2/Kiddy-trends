import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Banner from "./components/banner";
import Connect from "./components/connect";
import Meet from "./components/footer";

// Load custom fonts
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

// Metadata for the app
export const metadata: Metadata = {
  title: "KiddyTrends",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Banner at the top */}
          <Banner />

          {/* Connect section right below the banner */}
          <Connect />

          {/* Main page content */}
          <main className="flex-1">{children}</main>
          <Meet/>
        </div>
      </body>
    </html>
  );
}
