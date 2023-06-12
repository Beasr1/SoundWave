"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";

import useSubscribeModal from "@/hooks/useSubscribeModal";

import { postData } from "@/libs/helpers";
import { getStripe } from "@/libs/stripeClient";

import Modal from "./Modal";
import Button from "./Button";
import { UseUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";

const formatPrice = (price) => {
  const priceString = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: 0,
  }).format((price?.unit_amount || 0) / 100);

  return priceString;
};

const SubscribeModal = ({ products }) => {
  const subscribeModal = useSubscribeModal();
  const { user, isLoading, subscription } = UseUser();

  const authModel = useAuthModal();
  const [priceIdLoading, setPriceIdLoading] = useState();

  const onChange = (open) => {
    if (!open) {
      subscribeModal.onClose();
    }
  };

  const handleCheckout = async (price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      setPriceIdLoading(undefined);
      toast.error("Must be logged in");
      return authModel.onOpen();
    }

    console.log(subscription);
    console.log(user);
    if (subscription) {
      setPriceIdLoading(undefined);
      return toast("Already subscribed");
    }

    try {
      const { sessionId } = await postData({
        url: "/api/create-checkout-session",
        data: { price },
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return toast.error(error?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  let content = <div className="text-center">No products available.</div>;

  if (products.length) {
    content = (
      <div>
        {products.map((product) => {
          if (!product.prices?.length) {
            return <div key={product.id}>No prices available</div>;
          }

          return product.prices.map((price) => (
            <Button
              key={price.id}
              onClick={() => handleCheckout(price)}
              disabled={isLoading || price.id === priceIdLoading}
              className="mb-4"
            >
              {`Subscribe for ${formatPrice(price)} a ${price.interval}`}
            </Button>
          ));
        })}
      </div>
    );
  }

  if (subscription) {
    console.log(user);
    console.log(subscription);
    content = <div className="text-center">Already subscribed.</div>;
  }

  return (
    <Modal
      title="Only for premium users"
      description="Listen to music with Spotify Premium"
      isOpen={subscribeModal.isOpen}
      onChange={onChange}
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
