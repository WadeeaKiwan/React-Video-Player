import StyledPlayListItems from "./styles/StyledPlayListItems";
import PlayListItem from "./PlayListItem";

const PlayListItems = ({videos, activeVideo}) => {
  return (
    <StyledPlayListItems>
      {videos.map(video => (
        <PlayListItem
          key={video.id}
          video={video}
          active={video.id === activeVideo.id ? true : false}
        />
      ))}
    </StyledPlayListItems>
  )
}

export default PlayListItems;
