import React from "react"

const styles = {
  container: {
    display: "flex",
    alignItems: "center"
  }
}

const BlueTitleIcon = ({
  text,
  icon = "/images/icons/international/1.png"
}) => {
  return (
    <div style={styles.container}>
      <img src={icon} />
      <h1 style={{ fontSize: 30, paddingLeft: 15, color: "#30bfc5" }}>
        {text}
      </h1>
    </div>
  )
}

export default BlueTitleIcon
