import React from "react"

const styles = {
  container: {
    margin: "0px 0px 15px 0px"
  },
  titleContainer: {
    background: "#eefafb",
    borderLeft: "15px solid #30bfc5",
    display: "flex",
    padding: 15
  }
}

const BlueBanner = () => {
  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <div>
          <img style={{ width: 30 }} src="/images/icons/medicIcon.png" />
        </div>
        <div style={{ paddingLeft: 15 }}>
          <div style={{ fontWeight: "bold", fontSize: 20, color: "#30bfc5" }}>
            พญ.วรนุช จุนพึ่งพระเกียรติ์
          </div>
          <div style={{ paddingTop: 5 }}>
            อายุรกรรม หัวใจและหลอดเลือด(HC) โรง
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlueBanner
