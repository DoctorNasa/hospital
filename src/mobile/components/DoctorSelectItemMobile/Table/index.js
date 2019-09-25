import React from "react"
import "./style.css"

const styles = {
  container: {
    margin: "15px 0px 15px 0px"
  },
  header: {
    background: "#eefafb",
    color: "#30bfc5"
  }
}

const Table = () => {
  return (
    <div style={styles.container}>
      <table>
        <tr style={{ background: "#eefafb", color: "#30bfc5" }}>
          <td>วัน</td>
          <td>เวลา</td>
          <td>ออกตรวจ สัปดาห์</td>
          <td>สถานที่ ออกตรวจ</td>
        </tr>
        <tr
          style={{
            color: "#6c6b6a"
          }}
        >
          <td>วันจันทร์</td>
          <td>09:30-15:30</td>
          <td>ทุกสัปดาห์ </td>
          <td>อายุรกรรม หัวใจและหลอด เลือด(HC)</td>
        </tr>
        <tr style={{ background: "#f4f2f2", color: "#6c6b6a" }}>
          <td>วันอังคาร</td>
          <td>09:30-15:30</td>
          <td>ทุกสัปดาห์ </td>
          <td>อายุรกรรม หัวใจและหลอด เลือด(HC)</td>
        </tr>
        <tr
          style={{
            color: "#6c6b6a"
          }}
        >
          <td>วันพุธ</td>
          <td>09:30-15:30</td>
          <td>ทุกสัปดาห์ </td>
          <td>อายุรกรรม หัวใจและหลอด เลือด(HC)</td>
        </tr>
        <tr style={{ background: "#f4f2f2", color: "#6c6b6a" }}>
          <td>วันพฤหัส</td>
          <td>09:30-15:30</td>
          <td>ทุกสัปดาห์ </td>
          <td>อายุรกรรม หัวใจและหลอด เลือด(HC)</td>
        </tr>
        <tr
          style={{
            color: "#6c6b6a"
          }}
        >
          <td>วันเสาร์</td>
          <td>09:30-15:30</td>
          <td>ทุกสัปดาห์ </td>
          <td>อายุรกรรม หัวใจและหลอด เลือด(HC)</td>
        </tr>
      </table>
      <div
        style={{
          color: "#6c6b6a",
          marginTop: 15
        }}
      >
        <strong>Note:</strong> This schedule is based on normal doctor clinic
        hours. As there may be changes to the schedule from time to time,please
        wait for our contact center to confirm your appointment timing.
      </div>
    </div>
  )
}

export default Table
