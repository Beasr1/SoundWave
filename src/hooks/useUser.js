import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const MyUserContextProvider = (props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();
  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetais] = useState(null);
  const [subscription, setSubscription] = useState(null);

  const getUserDetails = () => supabase.from("users").select("*").single();
  const getSubsciption = () =>
    supabase
      .from("subscriptions")
      .select("*,prices(*,products(*))")
      .in("status", ["trialing", "active"])
      .single();

  useEffect(() => {
    if (user && !isLoadingData && !userDetails && !subscription) {
      setIsLoadingData(true);
      Promise.allSettled([getUserDetails(), getSubsciption()]).then(
        (results) => {
          const userDetailsPromise = results[0];
          const subscriptionPromise = results[1];

          if (userDetailsPromise.status === "fulfilled") {
            setUserDetais(userDetailsPromise.value.data);
          }

          if (subscriptionPromise.status === "fulfilled") {
            setSubscription(subscriptionPromise.value.data);
          }

          setIsLoadingData(false);
        }
      );
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetais(null);
      setSubscription(null);
    }
  }, [user, isLoadingUser]);
  //not other as lots of refreshing we don't want

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingData || isLoadingUser,
    subscription,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const UseUser = () => {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error(`useUser must be used within MyContextProvide`);
  return context;
};
