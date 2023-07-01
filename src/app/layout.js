import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserid from "./actions/getSongsByUserid";
import Player from "@/components/Player";
import getActiveProductsWithPrices from "./actions/getActiveProductsWithPrices";
import ParticleProvider from "@/particles/ParticleProvider";
const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoundWave",
  description: "A Media Player",
};

export const revalidate = 0;

export default async function RootLayout({ children }) {
  const userSongs = await getSongsByUserid();
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            {/* <ParticleProvider /> */}

            <ModalProvider products={products} />

            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
