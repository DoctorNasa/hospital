import React, { useState } from "react"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import "./style.css"

const arrayDb = [
  { title: "1", id: 1 },
  { title: "2", id: 2 },
  { title: "3", id: 3 },
  { title: "4", id: 4 },
  { title: "5", id: 5 },
  { title: "6", id: 6 },
  { title: "7", id: 7 },
  { title: "8", id: 8 },
  { title: "9", id: 9 }
]

const styleContainer = (margin, isOpen) =>
  isOpen
    ? {
        margin,
        border: "2px solid #30bfc5",
        padding: 5,
        paddingRight: 30,
        paddingLeft: 30,
        cursor: "pointer",
        color: "white",
        background: "#30bfc5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 20
      }
    : {
        margin,
        border: "2px solid #30bfc5",
        padding: 5,
        paddingRight: 30,
        paddingLeft: 30,
        cursor: "pointer",
        color: "#b5b5b5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 20
      }

const styles = {
  dropDownWindow: {
    marginLeft: 15,
    marginRight: 15,
    background: "white",
    color: "#848484",
    border: "1px solid #30bfc5",
    overflowY: "scroll",
    maxHeight: 200,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 98
  },
  itemsDropDown: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    cursor: "pointer"
  }
}

const ZDropDown = ({ margin, placeholder, disable, _select, select }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={() => !disable && setIsOpen(!isOpen)}
        style={styleContainer(margin, isOpen)}
      >
        <div>{select ? select : placeholder}</div>

        {isOpen ? (
          <div>
            <KeyboardArrowUpIcon fontSize="large" />
          </div>
        ) : (
          <div>
            <KeyboardArrowDownIcon fontSize="large" />
          </div>
        )}
      </div>
      {isOpen && (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <div style={styles.dropDownWindow}>
            {arrayDb.map((x, i) => (
              <div
                onClick={() => {
                  _select(i)
                  setIsOpen(false)
                }}
                className="itemsDropDown"
                key={x.title}
              >
                {x.title}
              </div>
            ))}
          </div>
        </ClickAwayListener>
      )}
    </div>
  )
}

export default ZDropDown
