import React from 'react';
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
import { MusicPlayerProvider } from "./MusicPlayer";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <PlayerControls />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
