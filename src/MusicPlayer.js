import React, { useState } from 'react';
import Misanthropic from './assets/Misanthropic.mp3';
import NeonMoon from './assets/NeonMoon.mp3';
import Tears from './assets/Tears.mp3';
import ThisFeeling from './assets/ThisFeeling.mp3';
import Transgender from './assets/Transgender.mp3';
import Sick from './assets/Sick.mp3';

const MusicPlayer = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
        {
            name: 'Transgender Dysphoria Blues - Against Me!',
            file: Transgender,
          },
          {
            name: 'Neon Moon - Kacey Musgraves',
            file: NeonMoon,
          },
          {
            name: 'Tears (feat. Caroline Polachek) - Charli XCX',
            file: Tears,
          },
          {
            name: "It's Ok to Be Sick - The Hirs Collective",
            file: Sick,
          },
          {
            name: 'Misanthropic Drunken Loner - Days N Daze',
            file: Misanthropic,
          },
          {
            name: 'This Feeling - Alabama Shakes',
            file: ThisFeeling,
          }   
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayer.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayer.Provider>
  );
};

export { MusicPlayer, MusicPlayerProvider };
