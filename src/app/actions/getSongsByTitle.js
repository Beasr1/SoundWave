const {
  createServerComponentClient,
} = require("@supabase/auth-helpers-nextjs");
import { cookies } from "next/headers";
import getSongs from "./getSongs";

const getSongsByTitle = async ({ title }) => {
  //console.log(title);
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!title) {
    //if empty then undefined
    //console.log("Getting all songs"); //had to dry run this again
    const allSongs = await getSongs();
    return allSongs;
  }

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .ilike("title", `%${title}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }

  return data || [];
};

export default getSongsByTitle;
