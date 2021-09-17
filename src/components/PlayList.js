import StyledPlayList from "./styles/StyledPlayList";
import NightMode from "./NightMode";
import PlayListHeader from "./PlayListHeader";
import PlayListItems from "./PlayListItems";

const PlayList = ({videos, nightModeHandler, nightMode, activeVideo}) => {
  return (
    <StyledPlayList>
      <NightMode nightModeHandler={nightModeHandler} nightMode={nightMode} />
      <PlayListHeader activeVideo={activeVideo} total={videos.length}/>
      <PlayListItems videos={videos} />
    </StyledPlayList>
  )
}

export default PlayList;
