import StyledPlayListItems from "./styles/StyledPlayListItems";
import PlayListItem from "./PlayListItem";

const PlayListItems = ({videos}) => {
  return (
    <StyledPlayListItems>
      {videos.map(video => (
        <PlayListItem
          key={video.id}
          video={video}
        />
      ))}
    </StyledPlayListItems>
  )
}

export default PlayListItems;
