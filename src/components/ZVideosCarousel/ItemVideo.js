import React from "react"
import Grid from "@material-ui/core/Grid"
import YoutubeModal from "./YoutubeModal"

const CardsCarousel = ({ title, desc, vidId }) => {
  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div style={{ color: "#00826a" }}>
            <b>Created Date:</b> 30/06/2019
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <YoutubeModal vidId={vidId} />
        </Grid>
      </Grid>
    </div>
  )
}

export default CardsCarousel
