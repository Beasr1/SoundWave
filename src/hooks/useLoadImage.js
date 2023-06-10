const { useSupabaseClient } = require("@supabase/auth-helpers-react");

const useLoadImage = (song) => {
  const supabaseClient = useSupabaseClient();
  if (!song) return null;
  const { data: imgData } = supabaseClient.storage
    .from("images")
    .getPublicUrl(song.image_path);

  return imgData.publicUrl;
};
export default useLoadImage;
