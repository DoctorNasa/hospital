import React from "react"
import Search from "@material-ui/icons/Search"
import "./style.css"

const SearchBar = () => {
  return (
    <div style={{ paddingBottom: 20 }}>
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
      <div className="searchContainer">
        <input className="searchInput" />
        <div className="bannerMenuSearch">
          <Search className="bannerMenuIcon" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
