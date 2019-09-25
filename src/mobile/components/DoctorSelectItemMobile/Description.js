import React from "react"

const styles = {
  container: {
    paddingBottom: 30
  },
  segment: {
    display: "flex",
    padding: "5px 0px 5px 0px"
  },
  textField: {
    padding: "0px 0px 0px 15px"
  },
  icon: {
    width: 30
  },
  highlight: {
    color: "#30bfc5",
    fontWeight: 900
  }
}

const Description = () => {
  return (
    <div style={styles.container}>
      <div style={styles.segment}>
        <div>
          <img style={styles.icon} src="/images/icons/cross-icon-blue.jpg" />
        </div>
        <div style={styles.textField}>
          <strong style={styles.highlight}>ศูนย์ทางการแพทย์</strong> อายุรกรรม
          หัวใจและหลอด เลือด(HC)
        </div>
      </div>
      <div style={styles.segment}>
        <div>
          <img style={styles.icon} src="/images/icons/package-desc-1.jpg" />
        </div>
        <div style={styles.textField}>
          <strong style={styles.highlight}>สาขา</strong> โรงพยาบาล พญาไท
          นวมินทร์
        </div>
      </div>
      <div style={styles.segment}>
        <div>
          <img style={styles.icon} src="/images/icons/hat-school-blue.jpg" />
        </div>
        <div style={styles.textField}>
          <strong style={styles.highlight}>วุฒิการศึกษา</strong>{" "}
          ปริญญาแพทย์ศาสตร์บัณฑิต (เกียรตินิยมอันดับ 2) คณะแ
        </div>
      </div>
      <div style={styles.segment}>
        <div style={{ width: 50 }} />
        <div style={styles.textField}>
          <strong style={styles.highlight}>วุฒิการศึกษา</strong>{" "}
          ปริญญาแพทย์ศาสตร์บัณฑิต (เกียรตินิยมอันดับ 2) คณะแ
        </div>
      </div>
      <div style={styles.segment}>
        <div>
          <img style={styles.icon} src="/images/icons/stars-blue.jpg" />
        </div>
        <div style={styles.textField}>
          <strong style={styles.highlight}>ความชำนาญ</strong>{" "}
          ผู้เชี่ยวชาญด้านโรคหัวใจและ หลอดเลือด
        </div>
      </div>
    </div>
  )
}

export default Description
