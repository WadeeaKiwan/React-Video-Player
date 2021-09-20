import { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import videosList from '../db/videosList';
import PlayList from './PlayList';
import Video from './Video';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import StyledPlayerWrapper from './styles/StyledPlayerWrapper';
import StyledHeader from './styles/StyledHeader';

const Player = () => {
  const savedState = JSON.parse(localStorage.getItem(`${videosList.playlistId}`));

  const [state, setState] = useState({
    videos: savedState ? savedState.videos : videosList.videos,
    playListId: savedState ? savedState.playListId : videosList.playlistId,
    nightMode: savedState ? savedState.nightMode : false,
    activeVideo: savedState ? savedState.activeVideo : videosList.videos[0],
    autoPlay: savedState ? savedState.autoPlay : false
  });

  console.log(state);

  const { videoId } = useRouteMatch().params;
  const history = useHistory();
  const location = useLocation();
  console.log({ location });

  useEffect(() => {
    const json = JSON.stringify({ ...state });
    localStorage.setItem(`${state.playListId}`, json);
  }, [state]);

  useEffect(() => {
    if (videoId) {
      const newActiveVideo = state.videos.find(video => {
        return video.id === videoId;
      });

      if (newActiveVideo) {
        setState(state => ({
          ...state,
          activeVideo: newActiveVideo,
          autoPlay: location.autoPlay
        }));
      } else {
        history.push({
          pathname: `/${state.activeVideo.id}`,
          autoPlay: false
        });
      }
    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoPlay: false
      });
    }

  }, [
    videoId,
    state.videos,
    history,
    state.activeVideo.id,
    location.autoPlay
  ]);

  const nightModeHandler = () => {
    setState(state => ({
      ...state,
      nightMode: !state.nightMode
    }));
  };

  return (
    <ThemeProvider theme={state.nightMode ? darkTheme : lightTheme}>
      <StyledHeader>
        <h1>React Video Player</h1>
      </StyledHeader>
      {state.videos && (
        <StyledPlayerWrapper>
          <Video
            activeVideo={state.activeVideo}
            autoPlay={state.autoPlay}
          />
          <PlayList
            videos={state.videos}
            nightModeHandler={nightModeHandler}
            nightMode={state.nightMode}
            activeVideo={state.activeVideo}
          />
        </StyledPlayerWrapper>
      )}
    </ThemeProvider>
  )
}

export default Player;
