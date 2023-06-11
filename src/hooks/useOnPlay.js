const { default: useAuthModal } = require("./useAuthModal");
const { default: usePlayer } = require("./usePlayer");
const { UseUser } = require("./useUser");

const useOnPlay = (songs) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = UseUser();

  const onPlay = (id) => {
    if (!user) return authModal.onOpen();
    player.setId(id);
    //playlist of the part where user clicked
    //liked playlist traversal
    //library
    //so on
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};
export default useOnPlay;
