import React from "react"
import BreadCrumb from "../BreadCrumb"
import Grid from "@material-ui/core/Grid"

const styles = {
  container: {
    height: 300,
    background: "white"
  },
  columnDesc: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  titles: {
    paddingLeft: 20
  },
  columnTitle: {
    fontWeight: "bold",
    fontSize: 20
  },
  columnSubtitle: {
    color: "#5f5f5f"
  },
  img: {
    height: 35
  }
}

const WhiteBanner = () => {
  return (
    <div style={styles.container}>
      <Grid container justify="center">
        <Grid item md={9} sm={12}>
          <BreadCrumb
            paddingTop={48}
            crumbs={[
              { name: "หน้าหลัก", link: "/" },
              { name: " แพคเกจโปรโมชั่น", link: "/packages" },
              { name: "แพ็คเกจเหมาจ่าย หัตการหัวใจ" }
            ]}
          />
          <h1>แพคเกจเหมาจ่าย หัตการหัวใจ</h1>
          <div style={{ display: "flex" }}>
            <div style={styles.columnDesc}>
              <img src="/images/icons/package-desc-1.jpg" style={styles.img} />
              <div style={styles.titles}>
                <div style={styles.columnTitle}>สาขา</div>
                <div style={styles.columnSubtitle}>โรงพยาบาล พญาไท 1</div>
              </div>
            </div>
            <div style={styles.columnDesc}>
              <img
                src="/images/icons/heart-box-package.jpg"
                style={styles.img}
              />
              <div style={styles.titles}>
                <div style={styles.columnTitle}>ชนิดของโปรแกรม</div>
                <div style={styles.columnSubtitle}>โปรแกรมการรักษารายครั้ง</div>
              </div>
            </div>
            <div style={styles.columnDesc}>
              <img src="/images/icons/package-desc-2.jpg" style={styles.img} />
              <div style={styles.titles}>
                <div style={styles.columnTitle}>สาขา</div>
                <div
                  style={{ color: "#32bfc6", fontWeight: "bold", fontSize: 20 }}
                >
                  39,000 - 121,000 บาท
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default WhiteBanner
