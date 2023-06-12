import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import Image from "next/image";

const MediaItem = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);
  const player = usePlayer();

  const handleClick = () => {
    if (onClick) return onClick(data.id); //on returning onCick true
    //default on
    return player.setId(data.id); //or turning on
  };
  // console.log(data);
  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imageUrl || "/images/liked.png"}
          alt="Media Item"
          className=" object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        {/* spelling of title was wrong */}
        <p className=" text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};
export default MediaItem;
