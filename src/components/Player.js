"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId); //fetch something from client components
  const songUrl = useLoadSongUrl(song);

  //dn load player if dn have these 3 things
  if (!song || !songUrl || !player.activeId) return null;

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      {/* key to destroy previous playercontent */}
      {/* else overlap or dn load */}
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
};
export default Player;
