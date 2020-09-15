import React from "react"
import useMusicPlayer from "../hooks/useMusicPlayer";
 
 
function PlayerControls() {
  const { isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();
  return (
    <>
      <div className="boxColor controls">
        <div className="current-track has-text-dark">
          <marquee>{currentTrackName}</marquee>
        </div>
        <div>
          <button className="button has-text-grey-dark has-background-light" onClick={playPreviousTrack} disabled={!currentTrackName}>
          <i class="fas fa-backward"></i>
          </button>
          <button className="button has-text-grey-dark has-background-light" onClick={togglePlay} disabled={!currentTrackName}>
            {isPlaying ? <i class="fas fa-pause-circle"></i> : <i class="fas fa-play-circle"></i>}
          </button>
          <button className="button has-text-grey-dark has-background-light" onClick={playNextTrack} disabled={!currentTrackName}>
          <i class="fas fa-forward"></i>
          </button>
        </div>
      </div>
    </>
  )
}
 
export default PlayerControls
 

