import ReactPlayer from 'react-player';
import StyledVideoWrapper from './styles/StyledVideoWrapper';

const Video = () => {
  return (
    <StyledVideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0" }}
        controls
        url="https://www.youtube.com/embed/sBws8MSXN7A"
      />
    </StyledVideoWrapper>
  )
}

export default Video;
