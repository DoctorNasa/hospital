import React from "react"

const styles = {
  container: {
    boxShadow: "0px 3px 14px -5px rgba(48,191,197,0.71)",
    borderCollapse: "collapse",
    width: "100%"
  },
  blockWhite: {
    padding: 15
  },
  blockGray: {
    background: "#f4f2f2",
    padding: 15
  },
  titleTable: {
    textTransform: "capitalize",
    padding: 15,
    color: "#30bfc5",
    background: "#e8fcfc"
  }
}

const Tableau = ({ data }) => {
  return (
    <table style={styles.container}>
      <tr>
        <th style={styles.titleTable}>{Object.entries(data[0])[0][0]}</th>
        <th style={styles.titleTable}>{Object.entries(data[0])[1][0]}</th>
        <th style={styles.titleTable}>{Object.entries(data[0])[2][0]}</th>
        <th style={styles.titleTable}>{Object.entries(data[0])[3][0]}</th>
      </tr>
      {data.map((row, index) => (
        <tr>
          <td style={index % 2 == 0 ? styles.blockWhite : styles.blockGray}>
            {Object.entries(row)[0][1]}
          </td>
          <td style={index % 2 == 0 ? styles.blockWhite : styles.blockGray}>
            {Object.entries(row)[1][1]}
          </td>
          <td style={index % 2 == 0 ? styles.blockWhite : styles.blockGray}>
            {Object.entries(row)[2][1]}
          </td>
          {Object.entries(row)[3][1].includes("Fax") &&
          Object.entries(row)[3][1].includes("Phone") ? (
            <td style={index % 2 == 0 ? styles.blockWhite : styles.blockGray}>
              {Object.entries(row)[3][1]}
            </td>
          ) : (
            <td style={index % 2 == 0 ? styles.blockWhite : styles.blockGray}>
              {Object.entries(row)[3][1]}
            </td>
          )}
        </tr>
      ))}
    </table>
  )
}
export default Tableau
