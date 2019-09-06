import React from "react"
import Grid from "@material-ui/core/Grid"

const styles = {
  container: {
    background: "#e3f4ec",
    height: 400,
    color: "#4d4d4d",
    paddingTop: 50
  }
}

const Footer2 = () => {
  return (
    <div style={styles.container}>
      <Grid container justify="center">
        <Grid item md={10} sm={11}>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 2 }}>
              <img src="/images/logo.png" style={{ width: "70%" }} />
            </div>
            <div style={{ flex: 4, display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1, display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold", color: "#00826a" }}>
                    หน้าหลัก
                  </div>
                  <div>phyathai 1</div>
                  <div>phyathai 2</div>
                  <div>phyathai 3</div>
                  <div>พญาไท ศรีราชา</div>
                  <div>พญาไท นวมินทร์</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold", color: "#00826a" }}>
                    แพคเกจ โปรโมชั่น
                  </div>
                  <div>แพคเกจและโปรโมชั่น</div>
                  <div>ชำระค่ารักษาพยาบาล</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold", color: "#00826a" }}>
                    บทความสุขภาพ
                  </div>
                  <div>บทความทางการแพทย์</div>
                  <div>วีดิโอ</div>
                  <div>จากใจผู้ใช้บริการ</div>
                  <div>นวัตกรรม</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold", color: "#00826a" }}>
                    เกี่ยวกับเรา
                  </div>
                  <div>ประวัติโรงพยาบาล</div>
                  <div>วสัยทัศน์และพันธกิจ</div>
                  <div>ผู้บริหารโรงพยาบาล </div>
                  <div>คณะกรรม</div>
                </div>
              </div>

              <div style={{ flex: 1, marginTop: 30 }}>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: "bold", color: "#00826a" }}>
                      บริการโรงพยาบาล
                    </div>
                    <div>ค้นหาและนัดหมายแพทย์</div>
                    <div>-ระบบเลือกให้</div>
                    <div>-ศูนย์การรักษา</div>
                    <div>ห้องพ</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <img
                      src="/images/imgfooter.jpg"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <img
                src="/images/icons/footer-icons.jpg"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div
            style={{
              color: "#00826a",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 50
            }}
          >
            Copyright © 2016 Phyathai Hospital. All rights reserved.
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer2
