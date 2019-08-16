import React, { useState, useEffect } from "react"
import YouTube from "react-youtube"

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
}

const VideoPlayer = () => {
  const [player, setPlayer] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const _onReady = e => setPlayer(e.target)
  const _onStart = () => {
    if (isPlaying) {
      player.pauseVideo()
      return setIsPlaying(false)
    }
    if (!isPlaying) {
      player.playVideo()
      return setIsPlaying(true)
    }
  }
  const timeElapsed = () => player.getCurrentTime()
  const statePlayer = e => console.log(e.target.getPlayerState())

  return (
    <div>
      <div onClick={() => _onStart()}>{isPlaying ? "pause" : "start"}</div>
      <button onClick={_onStart}>{isPlaying ? "pause" : "start"}>CLICK</button>
      <div style={{ position: "relative" }}>
        {player !== null && player.getPlayerState() !== 1 && (
          <div style={{ position: "absolute" }}>
            <div
              style={{
                height: 390,
                width: 640,
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 50
              }}
              onClick={() => _onStart()}
            >
              Play
            </div>
          </div>
        )}

        <YouTube
          videoId={"2g811Eo7K8U"}
          opts={opts}
          onReady={_onReady}
          onStateChange={statePlayer}
        />
      </div>
    </div>
  )
}

export default VideoPlayer
