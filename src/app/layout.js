import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoundWave",
  description: "A Media Player",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
