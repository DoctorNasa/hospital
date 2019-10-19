import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"
import Tableau from "../Tableau"
import BannerBottom2 from "../BannerBottom2"

const styles = {
  title: {
    color: "rgba(48,191,197,1)",

    marginTop: 60
  }
}

const CorporatePartners = () => {
  return (
    <div>
      <Grid container justify="center" style={{ marginBottom: 120 }}>
        <Grid item md={8} sm={11} xs={12}>
          <BlueTitleIcon
            text="LIST OF CORPORATE PARTNERS"
            icon="/images/icons/international/4.png"
          />
          <div>
            <b>Phyathai 2 International Hospital</b> has been serving many
            international patients from numerous corporations such as embassies,
            airlines and chambers. We work with these companies in order to
            convenience their employees and covering expatriates or tourists who
            are under our corporate partners. We earn trust from these
            well-known organizations meantime; we are continually developing our
            capability to serve our corporate partners and clients.
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div>
              <h2 style={styles.title}>Lists of Corporate Airline</h2>
              <Tableau
                data={[
                  {
                    name: "El Al Israel Airlines",
                    country: "Thailand",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "Kuwait airways",
                    country: "Thailand",
                    phone: "+972 39771111",
                    contact: "bkkkzku@kuwaitairways.com"
                  },
                  {
                    name: "Royal Bhutan Airlines(Druk Air)",
                    country: "Thailand",
                    phone: "+972 39771111",
                    contact: "drukairbkk@drukair.com.bt"
                  },
                  {
                    name: "Swiss International Airlines",
                    country: "Thailand",
                    phone: "+972 39771111",
                    contact: "http://www.swiss.com"
                  }
                ]}
              />
              <h2 style={styles.title}>
                Lists of Corporate Chambers of Commerce
              </h2>
              <Tableau
                data={[
                  {
                    name: "American Chamber of Commerce in thailand",
                    country: "USA",
                    phone: "+972 39771111",
                    contact: "service@amchamthailand.com"
                  },
                  {
                    name: "The British Club Bangkok",
                    country: "UK",
                    phone: "+972 39771111",
                    contact: "info@britishclubbangkok.org"
                  },
                  {
                    name: "British Chamber of Commerce Thailand",
                    country: "UK",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "Danish-Thai Chamber of Commerce",
                    country: "Denmark",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "The Franco Thai Chamber of Commerce",
                    country: "France",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "Thai-Canadian Chamber of Commerce",
                    country: "Canada",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "Thai-Norwegian Chamber of Commerce",
                    country: "Norway",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "Thai-Swedish Chamber of Commerce ",
                    country: "Sweden",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  }
                ]}
              />
              <h2 style={styles.title}>
                Lists of Corporate Chambers of Commerce
              </h2>
              <Tableau
                data={[
                  {
                    name: "American Chamber of Commerce in thailand",
                    country: "USA",
                    phone: "+972 39771111",
                    contact: "service@amchamthailand.com"
                  },
                  {
                    name: "The British Club Bangkok",
                    country: "UK",
                    phone: "+972 39771111",
                    contact: "info@britishclubbangkok.org"
                  },
                  {
                    name: "British Chamber of Commerce Thailand",
                    country: "UK",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "Danish-Thai Chamber of Commerce",
                    country: "Denmark",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "The Franco Thai Chamber of Commerce",
                    country: "France",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "Thai-Canadian Chamber of Commerce",
                    country: "Canada",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "Thai-Norwegian Chamber of Commerce",
                    country: "Norway",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  },
                  {
                    name: "Thai-Swedish Chamber of Commerce ",
                    country: "Sweden",
                    phone: "+972 39771111",
                    contact: "http://www.elal..co.il"
                  }
                ]}
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <BannerBottom2 />
    </div>
  )
}

export default CorporatePartners
