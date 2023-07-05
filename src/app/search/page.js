import Header from "@/components/Header";
import getSongsByTitle from "../actions/getSongsByTitle";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";
import ParticleProvider from "@/particles/ParticleProvider";

export const revalidate = 0;
const Search = async ({
  searchParams = {
    title: "", //default
  },
}) => {
  //const { title } = searchParams; //default props,,mast hain
  //console.log(searchParams); //server side
  //console.log(title);
  const songs = await getSongsByTitle(searchParams); //why the hell was i giving it title instead of searchParams
  return (
    <div className="relative z-0 bg-primary rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <div className="absolute -z-10 h-full w-full overflow-hidden overflow-y-auto">
        {/* //same particle id */}
        <ParticleProvider id="particle-1" />
      </div>

      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};
export default Search;
