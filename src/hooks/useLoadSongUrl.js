const { useSupabaseClient } = require("@supabase/auth-helpers-react");

const useLoadSongUrl = (song) => {
  const supabaseClient = useSupabaseClient(); //use Session contect to extract client if need authentication
  //you can
  if (!song) return "";
  const { data: songData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
};

export default useLoadSongUrl;
