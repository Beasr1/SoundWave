"use client";

//cccc is not default export so to access cccc it must be in {}
//similar to how you call useState
//took lot of time, first commented the codes to isolate the error in this file
//then tried and tried, op stack overflow (not direct help but help nevertheless)
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

const SupabaseProvider = ({ children }) => {
  const [supabaseClient] = useState(() => createClientComponentClient());
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
