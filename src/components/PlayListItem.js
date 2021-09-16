import StyledPlayListItem from "./styles/StyledPlayListItem";

const PlayListItem = ({ video }) => {
  return (
    <StyledPlayListItem>
      <div className="video-item-num">{video.num}</div>
      <div className="video-item-title">{video.title}</div>
      <div className="video-item-duration">{video.duration}</div>
    </StyledPlayListItem>
  )
}

export default PlayListItem;
