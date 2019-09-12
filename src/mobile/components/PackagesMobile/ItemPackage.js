import React from "react"
import { Link } from "react-router-dom"

const ItemPackage = ({ imgPath, title, subtitle, marginTop }) => {
  return (
    <div style={{ marginTop }}>
      <div
        style={{
          backgroundColor: "#ffd1db",
          borderRadius: 5,
          boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
        }}
      >
        <img
          src={imgPath}
          style={{
            width: "100%",
            height: "100%",
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
          <div
            style={{
              color: "#818385"
            }}
          >
            {subtitle}
          </div>
          <div style={{ textAlign: "right" }}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/articles/post/post-id-1"
            >
              <div style={{ paddingTop: 30, fontSize: 20, paddingBottom: 30 }}>
                อ่านต่อ
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemPackage
