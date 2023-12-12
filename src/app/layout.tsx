import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
//{inter.className}
export const metadata: Metadata = {
  title: "Red Laboral UPB",
  description: "Sistema web para la Universidad Privada Boliviana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-josefin w-full bg-[#F4F0ED]">{children}</body>
    </html>
  );
}
