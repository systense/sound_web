import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Blind Whales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-[10px] antialiased">
        <div className="md:flex">
          <Header />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
