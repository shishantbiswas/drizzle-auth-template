import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "drizzle-auth template",
  description: "A next 15 template with drizzle and better-auth",
};

const inter = localFont({
  src: [
    {
      path: "../assets/fonts/Inter-VariableFont.ttf",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
