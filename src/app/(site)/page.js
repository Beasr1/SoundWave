import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import getSongs from "../actions/getSongs";
import PageContent from "./components/PageContent";
import ParticleProvider from "@/particles/ParticleProvider";

export const revalidate = 0;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Home = async () => {
  const songs = await getSongs();
  //console.log(songs);
  //await wait(5000);
  return (
    //made parent of particle relative so particle can become absoute and cover whole background
    //bg-neutral-900
    //bg-[#280137]
    //bg-purple-950
    //bg-[#1f0c27]
    <div className="relative z-0 bg-primary rounded-lg h-full w-full overflow-hidden overflow-y-auto ">
      <div className="absolute -z-10 h-full w-full overflow-hidden overflow-y-auto">
        <ParticleProvider id="particle-1" />
      </div>

      {/* I tried so hard but could make particle go z< so I made this increase */}
      {/* <div className="relative z-10"> */}
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/liked.png"
              name="Liked Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>

      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
        <div>List of Songs!</div>
        <div>
          <PageContent songs={songs} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Home;
