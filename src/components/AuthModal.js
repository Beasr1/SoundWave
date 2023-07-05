"use client";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeMinimal, ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();
  useEffect(() => {
    //close auth modal when successfully log in
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]); //when they change

  const onChange = (open) => {
    if (!open) onClose();
  };

  return (
    <Modal
      title="welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        magicLink
        providers={["github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#7b1fa2",
                brandAccent: "#aa00ff",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
