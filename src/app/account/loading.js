"use client";
import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

export default function LoadingScreen() {
  return (
    <Box className="h-full flex justify-center items-center gap-4">
      <div className="rounded-full m-px bg-blue-500 animation-delay-100  animate-anime">
        <BounceLoader color="#0088DC" size={20} />
      </div>
      <div className="rounded-full m-px bg-red-500 animation-delay-300  animate-anime">
        <BounceLoader color="#E70025" size={20} />
      </div>
      <div className="rounded-full m-px bg-yellow-500 animation-delay-500  animate-anime">
        <BounceLoader color="#FFE721" size={20} />
      </div>
      <div className="rounded-full m-px bg-green-500 animation-delay-700 animate-anime">
        <BounceLoader color="#A3E900" size={20} />
      </div>
      <div className="rounded-full m-px bg-purple-500 animation-delay-900  animate-anime">
        <BounceLoader color="#720A97" size={20} />
      </div>
    </Box>
  );
}
