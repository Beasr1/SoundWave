const {
  createServerComponentClient,
} = require("@supabase/auth-helpers-nextjs");
import { cookies } from "next/headers";

const getSongsByUserid = async () => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.log("Sessionerror in getSongsByUser Id 1 : ", sessionError.message);
    return []; //empty means user not present
  }
  if (!sessionData.session) {
    //to prevent fetching error from supabase
    //console.log("Not signmd in");
    return [];
  }

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", sessionData.session?.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.log("Sessionerror in getSongsByUser Id 2 : ", error.message);
  }

  return data || [];
};

export default getSongsByUserid;
