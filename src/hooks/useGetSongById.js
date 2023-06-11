const { useSessionContext } = require("@supabase/auth-helpers-react");
const { useState, useMemo, useEffect } = require("react");
const { toast } = require("react-hot-toast");

const useGetSongById = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState(undefined);
  const { supabaseClient } = useSessionContext();

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    const fetchSong = async () => {
      const { data, error } = await supabaseClient
        .from("songs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setIsLoading(false);
        return toast.error(error.message);
      }

      setSong(data);
      setIsLoading(false);
    };

    fetchSong();
  }, [id, supabaseClient]);

  return useMemo(
    () => ({
      isLoading,
      song,
    }),
    [isLoading, song]
  );
};
export default useGetSongById;
