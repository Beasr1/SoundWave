import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserid from "./actions/getSongsByUserid";
const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoundWave",
  description: "A Media Player",
};

export const revalidate = 0;

export default async function RootLayout({ children }) {
  const userSongs = await getSongsByUserid();
  return (
    <html lang="en">
      <body className={font.className}>
        hey
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
