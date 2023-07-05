"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { UseUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { theme } from "../../tailwind.config";
const secColor = theme.extend.colors.secondary;

//wheter the current song is liked or not by the user
const LikeButton = ({ songId }) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const authModel = useAuthModal();
  const { user } = UseUser();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!user?.id) return;
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user.id)
        .eq("song_id", songId)
        .maybeSingle();
      //i want to console error if more than one
      //0 is fine but we will not trgger 1
      //if 0 data is null

      if (!error && data) setIsLiked(true);
    };

    fetchData();
  }, [songId, supabaseClient, user?.id]);

  const handleLike = async () => {
    if (!user) return authModel.onOpen(); //if logged out and like it it open auth model
    console.log("Liking");

    if (isLiked) {
      //it was oppsoite shir
      const { error } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", songId);

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(false);
      }
    } else {
      const { error } = await supabaseClient.from("liked_songs").insert({
        song_id: songId,
        user_id: user.id,
      });

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(true);
        toast.success("Liked!");
      }
    }
    router.refresh();
  };

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  return (
    <button
      className="cursor-pointer hover:opacity-75 transition"
      onClick={handleLike}
    >
      <Icon color={isLiked ? `${secColor}` : "white"} />
      {/* "#22c55e" */}
    </button>
  );
};
export default LikeButton;
