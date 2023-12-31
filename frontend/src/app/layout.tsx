import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Jacek Kuczynski | software developer",
  description:
    "My name is Jacek Kuczyński. I'm a full stack web developer, specialized in front-end development using React and TypeScript, based in Poznań, Poland.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const dynamicParams = false;
