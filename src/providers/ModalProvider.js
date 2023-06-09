"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";
// import AuthModal from "@/components/AuthModal";
// import SubscribeModal from "@/components/SubscribeModal";
// import UploadModal from "@/components/UploadModal";

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
      Modal
      <Modal />
      {/* <AuthModal />
      <SubscribeModal products={products} />
      <UploadModal /> */}
    </>
  );
};

export default ModalProvider;
