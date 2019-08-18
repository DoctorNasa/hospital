import React from "react"
import Search from "@material-ui/icons/Search"
import "./style.css"

const SearchBar = () => {
  return (
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
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
