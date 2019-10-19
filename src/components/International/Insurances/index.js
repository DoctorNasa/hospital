import React from "react"
import Grid from "@material-ui/core/Grid"
import BlueTitleIcon from "../BlueTitleIcon"
import BannerBottom2 from "../BannerBottom2"
import Tableau from "../Tableau"

const Insurances = () => {
  return (
    <div>
      <Grid container justify="center" style={{ marginBottom: 120 }}>
        <Grid item md={8} sm={11} xs={12}>
          <BlueTitleIcon
            text="INSURANCE LIST"
            icon="/images/icons/international/5.png"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div>
              <Tableau
                data={[
                  {
                    name: "Global Benefits Group,Inc",
                    website: "http://www.gbgi.net/",
                    location: "-",
                    contact: "Phone: 949-916-7941 Fax: 949-916-7943"
                  },
                  {
                    name: "Mercure Assistance",
                    website: "http://www.gbgi.net/",
                    location: "Munich",
                    contact: "Phone: 949-916-7941"
                  },
                  {
                    name: "Mercure Assistance",
                    website: "http://www.gbgi.net/",
                    location: "Munich",
                    contact: "Phone: 949-916-7941"
                  },
                  {
                    name: "Mercure Assistance",
                    website: "http://www.gbgi.net/",
                    location: "Munich",
                    contact: "Phone: 949-916-7941"
                  },
                  {
                    name: "Mercure Assistance",
                    website: "http://www.gbgi.net/",
                    location: "Munich",
                    contact: "Phone: 949-916-7941"
                  },
                  {
                    name: "Mercure Assistance",
                    website: "http://www.gbgi.net/",
                    location: "Munich",
                    contact: "Phone: 949-916-7941"
                  },
                  {
                    name: "Mercure Assistance",
                    website: "http://www.gbgi.net/",
                    location: "Munich",
                    contact: "Phone: 949-916-7941"
                  },
                  {
                    name: "Mercure Assistance",
                    website: "http://www.gbgi.net/",
                    location: "Munich",
                    contact: "Phone: 949-916-7941"
                  },
                  {
                    name: "Mercure Assistance",
                    website: "http://www.gbgi.net/",
                    location: "Munich",
                    contact: "Phone: 949-916-7941"
                  },
                  {
                    name: "Mercure Assistance",
                    website: "http://www.gbgi.net/",
                    location: "Munich",
                    contact: "Phone: 949-916-7941"
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

export default Insurances
