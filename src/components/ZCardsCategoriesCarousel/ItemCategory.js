import React from "react"
import Grid from "@material-ui/core/Grid"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import { Link } from "react-router-dom"

const styles = {
  item: {
    background: "#f2bd61",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.45)",
    marginLeft: 10,
    marginRight: 10
  },
  itemDesc: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    textAlign: "start"
  },
  backgroundImg: {
    position: "absolute",
    zIndex: -1,
    width: window.innerWidth / 2,
    height: 650,
    left: "-25%",
    top: "23%"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 15
  }
}

const ItemCategory = ({ imgPath, subtitle, title }) => {
  return (
    <Grid item sm={4}>
      <div style={styles.item}>
        <img style={{ width: "100%" }} src={imgPath} />
        <div style={styles.itemDesc}>
          <div style={styles.title}>{title}</div>
          <div>{subtitle}</div>
          <div style={{ marginTop: 15 }}>
            <b>Created Date: </b>01/07/2019
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ paddingTop: 15, fontSize: 20, paddingBottom: 20 }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/articles/post/post-id-1"
              >
                อ่านต่อ <ArrowForwardIos style={{ fontSize: 14 }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default ItemCategory
