import { Inter } from "next/font/google";
import "./globals.css";
import "../../../packages/ui/style.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" tracking-tight ">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
