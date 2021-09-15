import StyledPlayList from "./styles/StyledPlayList";
import PlayListHeader from "./PlayListHeader";
import PlayListItems from "./PlayListItems";

const PlayList = ({videos}) => {
  return (
    <StyledPlayList>
      <PlayListHeader />
      <PlayListItems videos={videos} />
    </StyledPlayList>
  )
}

export default PlayList;
