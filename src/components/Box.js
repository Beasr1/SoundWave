import { twMerge } from "tailwind-merge";

const Box = (props) => {
  const { children, className } = props;
  return (
    <div
      className={twMerge(
        `
        bg-neutral-900
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
