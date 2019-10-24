import React from "react"
import BlueTitleIcon from "../../BlueTitleIcon"
import FormQuestion from "./FormQuestion"

const BlockQuestion = ({ _success }) => {
  return (
    <div style={{ marginLeft: "6%", color: "#4d4d4d" }}>
      <h1 style={{ padding: "16px 16px 0px 0px" }}>ปรึกษาแพทย์ออนไลน์</h1>
      <div
        style={{
          display: "flex",
          marginTop: 15,
          flexDirection: "column"
        }}
      >
        <div style={{ color: "#4d4d4d" }}>เมื่อท่าน..</div>
        <div style={{ margin: "15px 0px 2px 0px" }}>
          - Pellentesque gravida vulputate ipsum, ut finibus dui viverra et. Sed
          molestie
        </div>
        <div style={{ margin: "2px 0px 2px 0px" }}>
          - Pellentesque gravida vulputate ipsum, ut finibus dui viverra et. Sed
          molestie
        </div>
        <div style={{ margin: "2px 0px 2px 0px" }}>
          - Pellentesque gravida vulputate ipsum, ut finibus dui viverra et. Sed
          molestie
        </div>
        <div style={{ margin: "2px 0px 2px 0px" }}>
          - Pellentesque gravida vulputate ipsum, ut finibus dui viverra et. Sed
          molestie
        </div>
        <div style={{ margin: "2px 0px 2px 0px" }}>
          - Pellentesque gravida vulputate ipsum, ut finibus dui viverra et. Sed
          molestie
        </div>
        <div style={{ margin: "2px 0px 2px 0px" }}>
          - Pellentesque gravida vulputate ipsum, ut finibus dui viverra et. Sed
          molestie
        </div>
      </div>
      <div style={{ marginTop: 30, marginBottom: 15 }}>
        <BlueTitleIcon
          image="/images/icons/editman.jpg"
          text="ข้อมูลการติดต่อ"
        />
      </div>
      <FormQuestion _success={_success} />
    </div>
  )
}

export default BlockQuestion
