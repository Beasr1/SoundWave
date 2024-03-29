"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import SubscribeModal from "@/components/SubscribeModal";
// import AuthModal from "@/components/AuthModal";
// import SubscribeModal from "@/components/SubscribeModal";

const ModalProvider = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; //modal not mounted
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
