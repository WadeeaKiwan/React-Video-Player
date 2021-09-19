import ReactPlayer from 'react-player';
import StyledVideo from './styles/StyledVideo';
import StyledVideoWrapper from './styles/StyledVideoWrapper';

const Video = ({activeVideo}) => {
  return (
    <StyledVideo>
      <StyledVideoWrapper>
        <ReactPlayer
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0" }}
          controls
          url={activeVideo.videoUrl}
        />
      </StyledVideoWrapper>
    </StyledVideo>
  )
}

export default Video;
