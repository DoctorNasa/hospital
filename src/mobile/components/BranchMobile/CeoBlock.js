import React from "react"
import BtnBlue from "../BtnBlue"

const styles = {
  margins: {
    marginLeft: 15,
    marginRight: 15
  }
}

const CeoBlock = () => {
  return (
    <div style={{ paddingBottom: 55, paddingTop: 30 }}>
      <div style={styles.margins}>
        <h3 className="blueTitle">
          ผู้บริหารโรงพยาบาล และ คณะกรรมการ โรงพยาบาลพญาไท
        </h3>
        <div>
          <img
            style={{ width: 50 }}
            src="/images/branch/testimonial-start-blue.jpg"
          />
        </div>
        <div style={{ marginLeft: 45, marginRight: 45 }}>
          เรามุ่งเน้นในเรื่องความเชี่ยวชาญ การแพทย์เฉพาะทาง
        </div>

        <div style={{ width: "100%", textAlign: "end" }}>
          <img
            style={{ width: 50 }}
            src="/images/branch/testimonial-end-blue.jpg"
          />
        </div>
        <div style={{ marginLeft: 45, marginRight: 45 }}>
          <div style={{ fontSize: 20, fontWeight: "bold" }}>นาย อัฐ ทองแตง</div>
          <div>นาย อัฐ ทองแตง ประธานเจ้าหน้าที่บริหาร เครือโรงพยาบาลพญาไท</div>
        </div>
      </div>

      <div style={{ bottom: 0, position: "relative" }}>
        <div style={{ position: "absolute" }}>
          <img
            src="/images/branch/branch-ceo.jpg"
            style={{
              width: "100%",
              height: 400,
              zIndex: -1
            }}
          />
        </div>

        <div style={{ width: "100%", textAlign: "center", paddingTop: 260 }}>
          <BtnBlue text="ดูทั้งหมด" />
        </div>
      </div>
    </div>
  )
}

export default CeoBlock
