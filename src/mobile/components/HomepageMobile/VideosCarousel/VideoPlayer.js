import React, { useState, useEffect } from "react"
import YouTube from "react-youtube"
import PlayCircleFilledWhite from "@material-ui/icons/PlayCircleFilledWhite"

const opts = {
  height: 300,
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
}

const VideoPlayer = ({ vidId }) => {
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
    <div style={{ position: "relative" }}>
      {!isPlaying && (
        <div
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            onClick={() => _onStart()}
          >
            <PlayCircleFilledWhite
              style={{
                fontSize: 100,
                color: "#30bfc5",
                backgroundColor: "white",
                borderRadius: 100
              }}
            />
          </div>
        </div>
      )}

      <YouTube
        videoId={vidId}
        opts={opts}
        onReady={_onReady}
        onStateChange={statePlayer}
      />
    </div>
  )
}

export default VideoPlayer
