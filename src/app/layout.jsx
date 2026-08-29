import localFont from "next/font/local";

import "./globals.css";

import ConditionalHeader from "@/components/layout/ConditionalHeader";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

const vazirmatn = localFont({
  src: [
    {
      path: "./fonts/ttf/Vazirmatn-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Vazirmatn-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Vazirmatn-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Vazirmatn-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Vazirmatn-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Vazirmatn-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Vazirmatn-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/ttf/Vazirmatn-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],

  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata = {
  title: "LAW",
  description: "Professional legal services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>
        <LoadingScreen />

        <ConditionalHeader />

        <main>{children}</main>
      </body>
    </html>
  );
}
