import React, { useState } from "react"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import "./style.css"

const arrayDb = [
  { title: "article1", id: 1 },
  { title: "article2", id: 2 },
  { title: "article3", id: 3 },
  { title: "article4", id: 4 },
  { title: "article5", id: 5 },
  { title: "article6", id: 6 },
  { title: "article7", id: 7 },
  { title: "article8", id: 8 },
  { title: "article9", id: 9 },
  { title: "article10", id: 10 },
  { title: "article11", id: 11 },
  { title: "article12", id: 12 },
  { title: "article13", id: 13 },
  { title: "article14", id: 14 },
  { title: "article15", id: 15 },
  { title: "article16", id: 16 },
  { title: "article17", id: 17 },
  { title: "article18", id: 18 },
  { title: "article19", id: 19 },
  { title: "article20", id: 20 },
  { title: "article21", id: 21 },
  { title: "article22", id: 22 },
  { title: "article23", id: 23 },
  { title: "article24", id: 24 },
  { title: "article25", id: 25 },
  { title: "article26", id: 26 },
  { title: "article27", id: 27 },
  { title: "article28", id: 28 },
  { title: "article29", id: 29 }
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
    height: 400
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

const SearchPlaylist = ({ margin }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={styleContainer(margin, isOpen)}
      >
        <div>เลือก Playlist / บทความเกี่ยวกับ </div>

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
        <div style={styles.dropDownWindow}>
          {arrayDb.map(x => (
            <div className="itemsDropDown" key={x.id}>
              {x.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPlaylist
