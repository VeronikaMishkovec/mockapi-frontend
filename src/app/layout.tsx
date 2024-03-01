import type { Metadata } from "next";
import "./globals.scss";
import styles from './layout.module.scss'
import { lato } from "@/app/ui/font";

export const metadata: Metadata = {
  title: "Mock API",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
