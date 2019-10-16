import React, { useState } from "react"
import { Link } from "react-router-dom"

const styles = {
  container: {
    display: "flex",
    width: "100%"
  },
  itemInactive: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#aaabab",
    display: "flex",
    justifyContent: "center",
    padding: 10,
    margin: 5,
    borderRadius: 15,
    cursor: "pointer",
    textDecoration: "none",
    position: "relative"
  },
  itemActive: {
    color: "white",
    background: "#30bfc5",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 10,
    margin: 5,
    borderRadius: 15,
    textDecoration: "none",
    cursor: "pointer",
    position: "relative"
  },
  noStyle: {
    textDecoration: "none",
    color: "#4d4d4d"
  },
  hoverTitleService: {
    color: "#00826a",
    fontWeight: 500,
    textAlign: "center",
    paddingBottom: 20,
    cursor: "pointer",
    position: "relative"
  },
  hoverWindow: {
    width: 200,
    position: "absolute",
    left: "50%",
    marginLeft: "-100px",
    top: 60,
    border: "1px solid #30bfc5",
    color: "#4d4d4d",
    background: "white"
  },
  itemInWindow: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    cursor: "pointer"
  },
  itemInWindowSub: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 15,
    cursor: "pointer"
  },
  triangle: {
    position: "absolute",
    top: -20,
    left: "40%",
    width: 0,
    right: "50%",
    borderStyle: "solid",
    borderWidth: "0 20px 20px 20px",
    borderColor: "transparent transparent #30bfc5 transparent"
  }
}

const menu = [
  {
    title: "INTERNATIONAL SERVICE",
    id: 1,
    subMenu: [
      {
        title: "International Marketing",
        link: "/international?marketing=true"
      },
      {
        title: "International Relation Center",
        link: "/international?relationcenter=true"
      },
      {
        title: "International Medical Center",
        link: "/international?medicalcenter=true"
      }
    ]
  },
  {
    title: "OUR CORPORATE PARTNERS",
    id: 2,
    subMenu: [
      {
        title: "Corporate Partners",
        link: "/international?corporatepartners=true"
      },
      {
        title: "Corporate Representative",
        link: "/international?corporaterepresentative=true"
      }
    ]
  },
  {
    title: "HEALTH INSURANCE",
    id: 3,
    subMenu: [
      {
        title: "Insurance List",
        link: "/international?insurances=true"
      },
      {
        title: "Insurance Guidance",
        link: "/international?insuranceguidance=true"
      }
    ]
  },
  { title: "ACCOMMODATIONS", link: "/accommodations/phyathai1", subMenu: false }
]

const Menu = ({ queries }) => {
  const [showDropDown, setshowDropDown] = useState(false)
  return (
    <div style={styles.container}>
      {menu.map((x, index) => (
        <div
          onClick={() => setshowDropDown(index)}
          onMouseOver={() => setshowDropDown(index)}
          onMouseLeave={() => setshowDropDown(false)}
          key={x.title}
          style={
            index === 0 && queries.marketing
              ? styles.itemActive
              : styles.itemInactive
          }
        >
          <div>{x.title}</div>
          {showDropDown === index && x.subMenu && (
            <div style={styles.hoverWindow}>
              <div style={{ position: "relative" }}>
                <div style={styles.triangle} />
              </div>
              {x.subMenu.map(y => (
                <Link to={y.link} style={styles.noStyle}>
                  <div className="itemInWindow">{y.title}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
export default Menu
