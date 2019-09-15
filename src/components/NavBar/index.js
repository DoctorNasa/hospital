import React, { useState } from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import SearchBar from "./SearchBar"
import SelectCountry from "./SelectCountry"
import Call from "./Call"
import "./style.css"

const titles = [
  {
    title: "หน้าหลัก",
    link: "/"
  },
  {
    title: "บริการโรงพยาบาล",
    link: "/services"
  },
  {
    title: "แพคเกจ โปรโมชั่น",
    link: "/packages"
  },
  {
    title: "บทความ",
    link: "/articles"
  },
  {
    title: "เกี่ยวกับเรา",
    link: "/aboutus"
  }
]

const styles = {
  titleInactive: {
    color: "#00826a",
    fontWeight: 500,
    textAlign: "center",
    paddingBottom: 20,
    cursor: "pointer"
  },
  titleActive: {
    color: "#00826a",
    fontWeight: 700,
    borderBottom: "5px solid #00826a",
    textAlign: "center",
    paddingBottom: 20
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
    left: " 50%",
    marginLeft: "-100px",
    top: 45,
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
  },
  noStyle: {
    textDecoration: "none",
    color: "#4d4d4d"
  }
}

const NavBar = ({ _pageContainer, pageContainer }) => {
  const [showDropDown, setshowDropDown] = useState(false)
  return (
    <Grid
      container
      justify="center"
      style={{
        boxShadow: " 2px 2px 52px -40px rgba(0,0,0,0.27)",
        position: "sticky",
        zIndex: 99
      }}
    >
      <Grid item md={10} sm={12}>
        <Grid container justify="center">
          <Grid item md={3} sm={2}>
            <Link to="/" style={styles.noStyle}>
              <img
                style={{
                  width: "100%",
                  maxWidth: 200,
                  marginTop: 30,
                  cursor: "pointer"
                }}
                src="/images/logo.png"
              />
            </Link>
          </Grid>
          <Grid item md={9} sm={10}>
            <Grid container justify="flex-end" style={{ paddingTop: 20 }}>
              <Grid style={{ minWidth: 280 }}>
                <SearchBar />
              </Grid>
              <Grid item style={{ minWidth: 100 }}>
                <SelectCountry />
              </Grid>
              <Grid item style={{ width: 200 }}>
                <Call />
              </Grid>
              <div style={{ width: "100%", display: "flex", paddingTop: 20 }}>
                {titles.map(({ title, link }, index) => (
                  <div
                    style={{
                      paddingTop: 8,
                      flex: 1
                    }}
                  >
                    {index === 1 ? (
                      <div
                        style={{
                          position: "relative",
                          flex: 1,
                          justifyContent: "center"
                        }}
                        onMouseOver={() => setshowDropDown(true)}
                        onMouseLeave={() => setshowDropDown(false)}
                      >
                        <div style={styles.hoverTitleService}>
                          บริการโรงพยาบาล
                        </div>
                        {showDropDown && (
                          <div style={styles.hoverWindow}>
                            <div style={{ position: "relative" }}>
                              <div style={styles.triangle} />
                            </div>

                            <Link to="/doctor-select" style={styles.noStyle}>
                              <div className="itemInWindow">
                                ค้นหาและนัดหมายแพทย์
                              </div>
                            </Link>
                            <Link
                              to="/doctor-select?booking=true"
                              style={styles.noStyle}
                            >
                              <div className="itemInWindowSub">
                                แนะนำแพทย์ให้ฉัน
                              </div>
                            </Link>
                            <Link to="/doctor-select" style={styles.noStyle}>
                              <div className="itemInWindowSub">
                                เลือกแพทย์ด้วยตัวฉันเอง
                              </div>
                            </Link>

                            <div className="itemInWindow">ศูนย์การรักษา</div>
                            <div className="itemInWindow">
                              ห้องพักและสิ่งอำนวยความ
                            </div>
                            <div className="itemInWindow">สะดวก</div>
                            <div className="itemInWindow">ชำระค่าบริการ</div>
                            <div className="itemInWindow">
                              ข่าวสารและกิจกรรม
                            </div>
                            <div className="itemInWindow">ติดต่อสอบถาม</div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        style={{ textDecoration: "none", flex: 1 }}
                        to={link}
                      >
                        <div
                          style={
                            index === pageContainer
                              ? styles.titleActive
                              : styles.titleInactive
                          }
                        >
                          {title}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
                <div style={{ flex: 1 }}>
                  <Button
                    style={{ zIndex: 1 }}
                    variant="contained"
                    color="secondary"
                    style={{ color: "white" }}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default NavBar
