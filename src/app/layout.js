import React from "react";
import "./globals.css";

export const metadata = {
  title: "Практика Хованский И.А.",
  description: "3 сем 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
