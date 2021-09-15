import StyledPlayListItem from "./styles/StyledPlayListItem";

const PlayListItem = ({ video }) => {
  return (
    <StyledPlayListItem>
      <div>{video.num}</div>
      <div>{video.title}</div>
      <div>{video.duration}</div>
    </StyledPlayListItem>
  )
}

export default PlayListItem;
