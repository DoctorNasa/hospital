import React from "react"
import ArrowBackIos from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"

const styles = {
  arrows: {
    fontSize: 25,
    color: "#00826a",
    cursor: "pointer",
    padding: 10
  },
  itemPageNotActive: {
    color: "#bbbbbb",
    fontWeight: "500",
    cursor: "pointer"
  },
  itemPageActive: {
    color: "#00826a",
    fontWeight: "500"
  }
}

const containerz = width => ({
  marginLeft: 15,
  marginRight: 15,
  display: "flex",
  alignItems: "center",
  width
})

const Pagination = ({
  currentPage,
  itemsLength = 70,
  width = "100%",
  _page = () => console.log("page")
}) => {
  const items = Math.round(itemsLength / 10)
  return (
    <div style={containerz(width)}>
      <ArrowBackIos
        style={styles.arrows}
        onClick={() => currentPage !== 0 && _page(currentPage - 1)}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly"
        }}
      >
        {new Array(items).fill(1).map((x, i) => {
          if (i < 6)
            return (
              <div
                onClick={() => _page(i)}
                style={
                  currentPage === i
                    ? styles.itemPageActive
                    : styles.itemPageNotActive
                }
              >
                {i + 1}
              </div>
            )

          if (i === 6) return <div style={styles.itemPageNotActive}>...</div>
        })}
      </div>

      <ArrowForwardIos
        style={styles.arrows}
        onClick={() => currentPage < items - 1 && _page(currentPage + 1)}
      />
    </div>
  )
}

export default Pagination
