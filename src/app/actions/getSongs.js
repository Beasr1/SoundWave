const {
  createServerComponentClient,
} = require("@supabase/auth-helpers-nextjs");
import { cookies } from "next/headers";

const getSongs = async () => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log("get songs");
    console.log(error);
  }

  return data || [];
};

export default getSongs;
