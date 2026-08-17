import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/header/Header";
import WebsiteAdFloating from "@/components/website-ad/WebsiteAdFloating";

const vazirmatn = localFont({
  src: "./fonts/webfonts/Vazirmatn[wght].woff2",
  variable: "--font-vazirmatn",
  weight: "100 900",
  style: "normal",
});

export const metadata = {
  title: "LAW",
  description: "Professional legal services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>
        {/* Full-width Header */}
        <Header />

        {/* Main content container */}
        <main>{children}</main>
        <WebsiteAdFloating/>
      </body>
    </html>
  );
}
