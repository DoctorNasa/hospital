import React from "react"
import Grid from "@material-ui/core/Grid"

const styles = {
  itemDesc: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    color: "white",
    minHeight: 155
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize"
  }
}

const styleBg = background => ({
  background,
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.45)",
  borderRadius: 10
})

const ItemCardCarousel = ({
  title,
  subtitle,
  desc,
  iconUrl,
  backgroundColor
}) => {
  return (
    <Grid item sm={4}>
      <div style={styleBg(backgroundColor)}>
        <div style={styles.itemDesc}>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 3 }}>
              <div style={styles.title}>{title}</div>
              <div>{subtitle}</div>
            </div>
            <div style={{ flex: 1 }}>
              <img style={{ width: 70 }} src={iconUrl} />
            </div>
          </div>
          <div style={{ marginTop: 30 }}>{desc}</div>
        </div>
      </div>
    </Grid>
  )
}

export default ItemCardCarousel
