import { Link } from "react-router-dom";
import StyledPlayListItem from "./styles/StyledPlayListItem";

const PlayListItem = ({ video, active }) => {
  return (
    <StyledPlayListItem active={active}>
      <Link to={{ pathname: `/${video.id}`, autoPlay: true}}>
        <div className="video-item-num">{video.num}</div>
        <div className="video-item-title">{video.title}</div>
        <div className="video-item-duration">{video.duration}</div>
      </Link>
    </StyledPlayListItem>
  )
}

export default PlayListItem;
