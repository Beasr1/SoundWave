import useSubscribeModal from "./useSubscribeModal";

const { default: useAuthModal } = require("./useAuthModal");
const { default: usePlayer } = require("./usePlayer");
const { UseUser } = require("./useUser");

const useOnPlay = (songs) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const subscribeModal = useSubscribeModal();
  const { user, subscription } = UseUser();

  const onPlay = (id) => {
    if (!user) return authModal.onOpen();
    player.setId(id);

    if (!subscription) {
      //premium user only
      return subscribeModal.onOpen();
    }

    //playlist of the part where user clicked
    //liked playlist traversal
    //library
    //so on
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};
export default useOnPlay;
