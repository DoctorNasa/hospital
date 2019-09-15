import React from "react"
import { Link } from "react-router-dom"
import BtnBlue from "../BtnBlue"
import TitlePackageItem from "../Titles/TitlePackageItem"

const ItemPackage = ({ imgPath, title, subtitle, marginTop, link, margin }) => {
  return (
    <div
      style={{
        margin,
        marginTop,
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
        borderRadius: 5
      }}
    >
      <img
        src={imgPath}
        style={{
          width: "100%",
          height: 200,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5
        }}
      />
      <div
        style={{
          padding: 15,
          textAlign: "center"
        }}
      >
        <TitlePackageItem
          text="แพ็คเกจเหมาจ่าย หัตการหัวใจ"
          padding="10px 50px 10px 50px"
        />

        <Link to={link} style={{ textDecoration: "none" }}>
          <BtnBlue text="ดูรายละเอียด" />
        </Link>
      </div>
    </div>
  )
}

export default ItemPackage
