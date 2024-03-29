import React from "react"
import Grid from "@material-ui/core/Grid"
import TitleDiv from "../TitleDiv"

const styles = {
  container: {
    background: "#f5f9f9",
    height: 400
  },
  hospitalItem: {
    padding: 15,
    cursor: "pointer",
    color: "#4d4d4d"
  }
}

const Footer1 = () => {
  return (
    <div style={styles.container}>
      <Grid container justify="center">
        <Grid item md={10} sm={11}>
          <TitleDiv text="Footer title" color="#00826a" textAlign="center" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#00826a"
            }}
          >
            <div style={styles.hospitalItem}>phyathai 1</div>
            <div style={styles.hospitalItem}>phyathai 2</div>
            <div style={styles.hospitalItem}>phyathai 3</div>
            <div style={styles.hospitalItem}>พญาไท ศรีราชา</div>
            <div style={styles.hospitalItem}>พญาไท นวมินทร์</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {new Array(11).fill(1).map((x, i) => (
                <div>column left {i}</div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {new Array(11).fill(1).map((x, i) => (
                <div>column middle-left {i}</div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {new Array(11).fill(1).map((x, i) => (
                <div>column middle-right {i}</div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {new Array(11).fill(1).map((x, i) => (
                <div>column right {i}</div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer1
