"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store, _store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-sm tracking-tight ">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={_store}>
            <ConfigProvider theme={{ token: { colorPrimary: "#D37E2F" } }}>
              {children}
            </ConfigProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
