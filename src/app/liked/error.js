"use client"; // Error components must be Client Components

import Box from "@/components/Box";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box className="h-full flex items-center justify-center gap-5">
      <div className="text-neutral-400">Something went wrong.</div>
      <button onClick={() => reset()}>
        {/* Attempt to recover by trying to re-render the segment  */}
        Try again
      </button>
    </Box>
  );
}
