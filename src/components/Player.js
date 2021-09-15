import { useEffect, useState } from 'react';
import videosList from '../db/videosList';
import PlayList from './PlayList';
import Video from './Video';

import StyledPlayerWrapper from './styles/StyledPlayerWrapper';

const Player = () => {
  const [state, setstate] = useState({
    videos: videosList.videos,
    playListId: videosList.playlistId
  });

  console.log(state);

  useEffect(() => {
    const json = JSON.stringify({ ...state });
    localStorage.setItem(`${state.playListId}`, json);
  }, [state])

  return (
    <>
      <StyledPlayerWrapper>
        <Video />
        <PlayList videos={state.videos} />
      </StyledPlayerWrapper>
    </>
  )
}

export default Player;
