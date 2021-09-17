import StyledPlayListHeader from "./styles/StyledPlayListHeader";

const PlayListHeader = ({activeVideo, total}) => {
  return (
    <StyledPlayListHeader>
      <h2>{activeVideo.title}</h2>
      <div>{activeVideo.num} / {total}</div>
    </StyledPlayListHeader>
  )
}

export default PlayListHeader;
