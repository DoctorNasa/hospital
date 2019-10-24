import React from "react"
import BlueTitle from "./BlueTitle"
import Pagination from "../../Pagination"
import Accordeon from "./Accordeon"

const BlockFaq = ({ list, currentPage, _page }) => {
  return (
    <div style={{ marginLeft: "6%" }}>
      <h1 style={{ color: "#4d4d4d", padding: "16px 16px 16px 0px" }}>
        แพคเกจและโปรโมชั่น
      </h1>
      <BlueTitle total={list.total} />
      <Accordeon list={list} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 15
        }}
      >
        <Pagination
          currentPage={currentPage}
          itemsLength={list.total}
          width={"50%"}
          _page={_page}
        />
      </div>
    </div>
  )
}

export default BlockFaq
