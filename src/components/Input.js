import React from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// placeholder:text-neutral-400
//border-transparent
const Input = React.forwardRef(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          `
            flex 
            w-full 
            rounded-md 
            bg-primary
            border
            px-3 
            py-3 
            text-sm 
            file:border-0 
            file:bg-transparent 
            file:text-sm 
            file:font-medium 
            placeholder: text-neutral-200

            disabled:cursor-not-allowed 
            disabled:opacity-50
            focus:outline-none
          `,
          disabled && "opacity-75",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
