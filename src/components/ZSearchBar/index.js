import React from "react"
import Search from "@material-ui/icons/Search"
import "./style.css"

const SearchBar = ({
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  padding,
  noTitle,
  onChange = e => console.log(e.target.value),
  onSubmit = e => {
    e.prevent.default()
    console.log("submit")
  },
  searchInput = ""
}) => {
  return (
    <div
      style={{
        paddingBottom: 20,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        padding
      }}
    >
      {!noTitle && (
        <div
          style={{
            textAlign: "center",
            color: "#1f858a",
            fontSize: 25,
            marginBottom: 20,
            fontWeight: 600
          }}
        >
          Search
        </div>
      )}

      <form
        className="searchContainer"
        onSubmit={e => {
          e.preventDefault()
          onSubmit(e)
        }}
      >
        <input
          onChange={e => onChange(e.target.value)}
          className="searchInput"
          value={searchInput}
        />
        <div className="bannerMenuSearch">
          <Search className="bannerMenuIcon" />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
