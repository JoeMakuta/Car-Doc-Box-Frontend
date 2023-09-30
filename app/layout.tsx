"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store, store1 } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-sm tracking-tight ">
      <Provider store={store1}>
        <PersistGate loading={null} persistor={store}>
          <ConfigProvider theme={{ token: { colorPrimary: "#D37E2F" } }}>
            <body className={inter.className}>{children}</body>
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </html>
  );
}
