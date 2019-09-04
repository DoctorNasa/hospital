import React from "react"
import { Link } from "react-router-dom"

const styles = {
  menu: {
    flex: 1,
    color: "#818385",
    padding: 7,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    textAlign: "center",
    fontSize: 20
  },
  menuActive: {
    flex: 1,
    color: "white",
    background: "#30bfc5",
    padding: 7,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    textAlign: "center",
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: 20
  }
}

const BlogMenu = ({ queries }) => {
  return (
    <div
      style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}
    >
      <Link to="/articles" style={{ textDecoration: "none" }}>
        <div
          style={
            Object.entries(queries).length === 0
              ? styles.menuActive
              : styles.menu
          }
        >
          ทั้งหมด
        </div>
      </Link>
      <Link to="/articles?videos=true" style={{ textDecoration: "none" }}>
        <div style={queries.videos ? styles.menuActive : styles.menu}>
          บทความ
        </div>
      </Link>
      <Link to="/articles?articles=true" style={{ textDecoration: "none" }}>
        <div style={queries.articles ? styles.menuActive : styles.menu}>
          วีดีโอ
        </div>
      </Link>
    </div>
  )
}

export default BlogMenu
