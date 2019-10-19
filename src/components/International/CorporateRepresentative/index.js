import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"

const styles = {
  blockContainer: {
    boxShadow: "0px 3px 14px -5px rgba(48,191,197,0.71)",
    display: "flex",
    marginBottom: 100
  },
  descContainer: {
    flex: 3,
    padding: "0px 30px 30px 30px"
  },
  title: {
    fontWeight: "bold",
    color: "#30bfc5"
  },
  contactContainer: {
    marginTop: 30,
    display: "flex",
    color: "rgba(48,191,197,0.71)",
    flexDirection: "column"
  },
  contactItem: {
    margin: "12px 0px 12px 0px",
    display: "flex"
  },
  contactIcon: {
    width: 25,
    height: 25,
    paddingRight: 20
  }
}

const CorporateRepresentative = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item md={8} sm={11} xs={12}>
          <BlueTitleIcon
            text="LIST OF CORPORATE REPRESENTATIVE"
            icon="/images/icons/international/4.png"
          />
          <div style={{ marginBottom: 100 }}>
            Monaliza Medical CO., LTD – For Medical Care Overseas,
            Kuwait/Bangkok
          </div>
          <div style={styles.blockContainer}>
            <div style={{ flex: 2 }}>
              <img
                src="/images/international/kuwait.jpg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div style={styles.descContainer}>
              <h2 style={styles.title}>Kuwait Office</h2>
              <p>
                Alhashemeiya Building 3rd Floor Office N 13 Sharg, the State of
                Kuwait
              </p>
              <p>Contact person : Ms. Jawhara</p>
              <div style={styles.contactContainer}>
                <div style={styles.contactItem}>
                  <img
                    src="/images/international/g_phone.png"
                    style={styles.contactIcon}
                  />
                  <div>+66 2617 2444 Ext: 2020, 2057, 5221</div>
                </div>
                <div style={styles.contactItem}>
                  <img
                    src="/images/international/g_fax.png"
                    style={styles.contactIcon}
                  />
                  <div>+66 2619 8555</div>
                </div>
                <div style={styles.contactItem}>
                  <img
                    src="/images/international/g_mail.png"
                    style={styles.contactIcon}
                  />
                  <div>monalizathailand@hotmail.co.uk</div>
                </div>
                <div style={styles.contactItem}>
                  <img
                    src="/images/international/g_web.png"
                    style={styles.contactIcon}
                  />
                  <div>www.medical-tourism-thailand.org</div>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.blockContainer}>
            <div style={styles.descContainer}>
              <h2 style={styles.title}>Bangkok Office</h2>
              <p>
                Alhashemeiya Building 3rd Floor Office N 13 Sharg, the State of
                Kuwait
              </p>
              <p>Contact person : Ms. Jawhara</p>
              <div style={styles.contactContainer}>
                <div style={styles.contactItem}>
                  <img
                    src="/images/international/g_phone.png"
                    style={styles.contactIcon}
                  />
                  <div>+66 2617 2444 Ext: 2020, 2057, 5221</div>
                </div>
                <div style={styles.contactItem}>
                  <img
                    src="/images/international/g_fax.png"
                    style={styles.contactIcon}
                  />
                  <div>+66 2619 8555</div>
                </div>
                <div style={styles.contactItem}>
                  <img
                    src="/images/international/g_mail.png"
                    style={styles.contactIcon}
                  />
                  <div>monalizathailand@hotmail.co.uk</div>
                </div>
                <div style={styles.contactItem}>
                  <img
                    src="/images/international/g_web.png"
                    style={styles.contactIcon}
                  />
                  <div>www.medical-tourism-thailand.org</div>
                </div>
              </div>
            </div>
            <div style={{ flex: 2 }}>
              <img
                src="/images/international/bangkok.jpg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CorporateRepresentative
