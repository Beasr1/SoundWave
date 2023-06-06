import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="flex justify-center items-center w-screen h-screen text-4xl gap-4">
      <div className="rounded-full m-px bg-blue-500  h-8 w-8 anim animation-delay-100  animate-anime"></div>
      <div className="rounded-full m-px bg-red-500 h-8 w-8 animation-delay-300  animate-anime"></div>
      <div className="rounded-full m-px bg-yellow-500 h-8 w-8 animation-delay-500  animate-anime"></div>
      <div className="rounded-full m-px bg-green-500 h-8 w-8 animation-delay-700 animate-anime"></div>
      <div className="rounded-full m-px bg-purple-500 h-8 w-8 animation-delay-900  animate-anime"></div>
    </div>
  );
}
