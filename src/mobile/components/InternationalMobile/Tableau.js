import React from "react"

const styles = {
  container: {
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    margin: "15px 15px 15px 15px"
  },
  section: {
    display: "flex"
  },
  left: {
    flex: 1,
    color: "#20a4ab",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    textTransform: "capitalize"
  },
  right: {
    flex: 3,
    color: "#6c6b6a",
    fontWeight: 500,
    paddingLeft: 15
  },
  blockWhite: {
    padding: 15
  },
  blockGray: {
    background: "#f4f2f2",
    padding: 15
  }
}

const Tableau = ({ data }) => {
  return (
    <div style={styles.container}>
      {data.map((x, index) => (
        <div style={index % 2 == 0 ? styles.blockWhite : styles.blockGray}>
          <div style={styles.section}>
            <div style={styles.left}>
              <div>{Object.entries(x)[0][0]}</div>
              <div>:</div>
            </div>
            <div style={styles.right}>{Object.entries(x)[0][1]}</div>
          </div>
          <div style={styles.section}>
            <div style={styles.left}>
              <div>{Object.entries(x)[1][0]}</div> <div>:</div>
            </div>
            <div style={styles.right}>{Object.entries(x)[1][1]}</div>
          </div>
          <div style={styles.section}>
            <div style={styles.left}>
              <div>{Object.entries(x)[2][0]}</div> <div>:</div>
            </div>
            <div style={styles.right}>{Object.entries(x)[2][1]}</div>
          </div>
          <div style={styles.section}>
            <div style={styles.left}>
              <div>{Object.entries(x)[3][0]}</div> <div>:</div>
            </div>
            <div style={styles.right}>{Object.entries(x)[3][1]}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Tableau
