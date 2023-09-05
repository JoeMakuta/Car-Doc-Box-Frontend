import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" tracking-tight ">
      <ConfigProvider theme={{ token: { colorPrimary: "#D37E2F" } }}>
        <body className={inter.className}>{children}</body>
      </ConfigProvider>
    </html>
  );
}
