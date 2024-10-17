import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Falling Whale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="p-[10px] md:flex md:py-[40px] md:px-[20px]">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
