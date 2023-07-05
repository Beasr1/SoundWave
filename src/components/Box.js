import { twMerge } from "tailwind-merge";

const Box = (props) => {
  const { children, className } = props;
  return (
    // bg-neutral-900
    <div
      className={twMerge(
        `
       
        bg-primary
        rounded-lg
        h-fit
        w-full
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
