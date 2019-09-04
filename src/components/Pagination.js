import React from "react"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"

const styles = {
  container: {
    marginLeft: 15,
    marginRight: 15,
    display: "flex",
    alignItems: "center"
  },
  arrows: {
    fontSize: 25,
    color: "#00826a",
    cursor: "pointer",
    padding: 10
  },
  itemPageNotActive: {
    color: "#bbbbbb",
    fontWeight: "500"
  },
  itemPageActive: {
    color: "#00826a",
    fontWeight: "500"
  }
}

const Pagination = ({ currentPage, itemsLength }) => {
  const items = Math.round(itemsLength / 5)
  return (
    <div style={styles.container}>
      <ArrowBackIos style={styles.arrows} />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly"
        }}
      >
        {new Array(7).fill(1).map((x, i) => (
          <div
            style={
              currentPage === i
                ? styles.itemPageActive
                : styles.itemPageNotActive
            }
          >
            {i}
          </div>
        ))}
        {items.length > 6 && <div style={styles.itemPageNotActive}>...</div>}
      </div>

      <ArrowForwardIos style={styles.arrows} />
    </div>
  )
}

export default Pagination
