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
  onSubmit = () => console.log("submit"),
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

      <div className="searchContainer">
        <input
          onChange={e => onChange(e.target.value)}
          className="searchInput"
          value={searchInput}
        />
        <div className="bannerMenuSearch" onClick={onSubmit}>
          <Search className="bannerMenuIcon" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
