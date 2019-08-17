import React from "react"

const styles = {
  containerFooter1: {
    background: "#f5f9f9",
    height: 400,
    marginTop: 50
  },
  containerFooter2: {
    background: "#e3f4ec",
    height: 400
  }
}

const FooterContainer = () => {
  return (
    <div>
      <div style={styles.containerFooter1}>Footer1</div>
      <div style={styles.containerFooter2}>Footer2</div>
    </div>
  )
}

export default FooterContainer
