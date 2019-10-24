import React from "react"

const styles = {
  container: { color: "#30bfc5", display: "flex", alignItems: "center" },
  img: { height: 35, paddingRight: 15 }
}

const BlueTitleIcon = ({ image, text }) => {
  return (
    <div style={styles.container}>
      <img style={styles.img} src={image} />
      <div>{text}</div>
    </div>
  )
}

export default BlueTitleIcon
