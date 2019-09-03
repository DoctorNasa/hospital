import React from "react"
import YoutubeModal from "./YoutubeModal"

const ItemVideo = ({ vidId, title, desc }) => {
  return (
    <div>
      <YoutubeModal vidId={vidId} />
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <div
          style={{
            marginTop: 15,
            marginBottom: 15,
            color: "#4d4d4d",
            fontSize: 20,
            fontWeight: 600
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#818385"
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  )
}

export default ItemVideo
