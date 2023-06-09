import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoundWave",
  description: "A Media Player",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        hey
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
