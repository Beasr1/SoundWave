"use client";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useMemo } from "react";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";
import ParticleProvider from "@/particles/ParticleProvider";

const Sidebar = ({ children, songs }) => {
  const pathname = usePathname();
  const player = usePlayer();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    // zindex 0
    <div
      className={twMerge(
        `flex h-full`,
        player.activeId && "h-[calc(100%-80px)]"
      )}
    >
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-300 p-2">
        {/* Box of Home and search */}
        <Box className="relative">
          {/* <ParticleProvider id="particle-2" /> */}
          <div className="flex flex-col gap-y-4 px-5 py-4 z-[9999]">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>

        {/* Library */}
        <Box className=" relative overflow-y-auto h-full">
          {/* <ParticleProvider id="particle-3" /> */}
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2"> {children}</main>
    </div>
  );
};

export default Sidebar;
