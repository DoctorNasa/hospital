import React from "react"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import { Link } from "react-router-dom"

const ItemAccommodation = ({ imgPath, title, price, margin, link }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
        margin
      }}
    >
      <img
        src={imgPath}
        style={{
          width: "100%",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5
        }}
      />
      <div
        style={{
          paddingLeft: 15,
          paddingRight: 15
        }}
      >
        <div
          style={{
            marginTop: 15,
            marginBottom: 15,
            color: "#4d4d4d",
            fontSize: 20,
            fontWeight: 600
          }}
        >
          {title}
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#30bfc5", paddingTop: 15, fontSize: 25 }}>
            {price} บาท
          </div>

          <div>รวมค่าบริการต่างๆของโรงพยาบาลแล้ว</div>
          <Link style={{ textDecoration: "none", color: "black" }} to={link}>
            <div style={{ paddingTop: 30, fontSize: 25, paddingBottom: 30 }}>
              อ่านต่อ <ArrowForwardIos style={{ fontSize: 18 }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemAccommodation
