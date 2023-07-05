"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import { postData } from "@/libs/helpers";
import { UseUser } from "@/hooks/useUser";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { toast } from "react-hot-toast";

//activate the test link  in stripe
const ProfileContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, user, userDetails } = UseUser();
  const { full_name, alias } = userDetails;
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/"); //only authenticated
    }
  }, [isLoading, user, router]);

  console.log(userDetails);
  return <div className="mb-7 px-6">Profile</div>;
};

export default ProfileContent;
