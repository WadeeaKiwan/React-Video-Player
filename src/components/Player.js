import { useEffect, useState } from 'react';
import videosList from '../db/videosList';
import PlayList from './PlayList';
import Video from './Video';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import StyledPlayerWrapper from './styles/StyledPlayerWrapper';
import StyledHeader from './styles/StyledHeader';

const Player = () => {
  const [state, setState] = useState({
    videos: videosList.videos,
    playListId: videosList.playlistId,
    nightMode: false,
    activeVideo: videosList.videos[0]
  });

  console.log(state);

  useEffect(() => {
    const json = JSON.stringify({ ...state });
    localStorage.setItem(`${state.playListId}`, json);
  }, [state]);

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
