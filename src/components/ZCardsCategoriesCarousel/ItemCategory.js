import React from "react"
import Grid from "@material-ui/core/Grid"

const styles = {
  item: {
    background: "#f2bd61",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.45)"
  },
  itemDesc: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  backgroundImg: {
    position: "absolute",
    zIndex: -1,
    width: window.innerWidth / 2,
    height: 650,
    left: "-25%",
    top: "23%"
  }
}

const ItemCategory = ({ imgPath, subtitle, title }) => {
  return (
    <Grid item sm={4}>
      <div style={styles.item}>
        <img style={{ width: "100%" }} src={imgPath} />
        <div style={styles.itemDesc}>
          <h4>{title}</h4>
          <div>{subtitle}</div>
          <div style={{ marginTop: 30 }}>
            <b>Created Date: </b>01/07/2019
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default ItemCategory
