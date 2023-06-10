"use client";

import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";
import PlayButton from "./PlayeButton";

const SongItem = ({ data, onClick }) => {
  const imgPath = useLoadImage(data);
  return (
    //container
    <div
      onClick={() => onClick(data.id)}
      className="
            relative 
            group 
            flex 
            flex-col 
            items-center 
            justify-center 
            rounded-md 
            overflow-hidden 
            gap-x-4 
            bg-neutral-400/5 
            cursor-pointer 
            hover:bg-neutral-400/10 
            transition 
            p-3
          "
    >
      {/* image div */}
      <div
        className="
              relative 
              aspect-square 
              w-full
              h-full 
              rounded-md 
              overflow-hidden
            "
      >
        <Image
          className="object-cover"
          src={imgPath || "/images/music-placeholder.png"}
          fill
          alt="Image"
        />
      </div>
      {/* title div */}
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p
          className="
                text-neutral-400 
                text-sm 
                pb-4 
                w-full 
                truncate
              "
        >
          By {data.author}
        </p>
      </div>
      <div
        className="
              absolute 
              bottom-24 
              right-5
            "
      >
        Play
        <PlayButton />
      </div>
    </div>
  );
};
export default SongItem;
