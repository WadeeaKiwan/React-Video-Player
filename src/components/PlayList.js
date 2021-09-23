import StyledPlayList from "./styles/StyledPlayList";
import PlayListHeader from "./PlayListHeader";
import PlayListItems from "./PlayListItems";

const PlayList = ({ videos, activeVideo }) => {
  return (
    <StyledPlayList>
      <PlayListHeader activeVideo={activeVideo} total={videos.length} />
      <PlayListItems videos={videos} activeVideo={activeVideo} />
    </StyledPlayList>
  );
};

export default PlayList;
