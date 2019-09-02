import React from "react"

const styles = {
  menu: {
    flex: 1,
    color: "#818385",
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    textAlign: "center"
  },
  menuActive: {
    flex: 1,
    color: "white",
    background: "#30bfc5",
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    textAlign: "center"
  }
}

const BlogMenu = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={styles.menuActive}>ทั้งหมด</div>
      <div style={styles.menu}>บทความ</div>
      <div style={styles.menu}>วีดีโอ</div>
    </div>
  )
}

export default BlogMenu
