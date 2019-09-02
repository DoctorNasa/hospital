import React from "react"
import { Link } from "react-router-dom"
import queryString from "query-string"
import ZSearchBar from "../ZSearchBar"
import ZSelect from "../ZSelect"
import BreadCrumb from "../BreadCrumb"
import BlogMenu from "./BlogMenu"

const styles = {
  margins: {
    marginLeft: 15,
    marginRight: 15
  }
}

const BlogMobile = ({ queries }) => {
  return (
    <div style={{ paddingTop: 100 }}>
      browser BlogMobile
      <Link to="/articles?filter=top&origin=im">search</Link>
      <Link to="/articles">articles</Link>
      <button
        onClick={() => console.log(queryString.parse(window.location.search))}
      >
        lol
      </button>
      <div style={styles.margins}>
        <div>ค้นหา...สื่อวิดีโอหรือบทความสุขภาพ</div>
        <ZSearchBar marginTop={15} noTitle />
        <div>Playlist / บทความเกี่ยวกับ</div>
        <ZSelect />
        <BreadCrumb
          crumbs={[
            { name: "หน้าหลัก", link: "/" },
            { name: "บทความสุขภาพ", link: "/" }
          ]}
        />
        <BlogMenu queries={queries} />
      </div>
    </div>
  )
}

export default BlogMobile

//TODO BTNDRAG
