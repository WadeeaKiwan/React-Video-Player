import ReactPlayer from 'react-player';
import StyledVideo from './styles/StyledVideo';
import StyledVideoWrapper from './styles/StyledVideoWrapper';

const Video = ({activeVideo, autoPlay}) => {
  return (
    <StyledVideo>
      <StyledVideoWrapper>
        <ReactPlayer
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0" }}
          controls
          url={activeVideo.videoUrl}
          playing={autoPlay}
        />
      </StyledVideoWrapper>
    </StyledVideo>
  )
}

export default Video;
