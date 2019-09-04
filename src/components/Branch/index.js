import React, { useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import BranchBannerCarousel from "./BranchBannerCarousel"
import BranchCarouselCard from "./BranchCarouselCard"
import BranchContent from "./BranchContent"
import CeoBlock from "./CeoBlock"
import MapBlock from "./MapBlock"
import BtnBlue from "../BtnBlue"
import CardsCarousel from "../CardsCarousel"
import PackagesCarousel from "../PackagesCarousel"
import AnotherCarousel from "../AnotherCarousel"
import TestimonialCarousel from "../TestimonialCarousel"

import "./style.css"

const dnBranch = [
  {
    id: "phyathai1",
    name: "Phyathai 1",
    lat: 13.75648,
    lng: 100.539204,
    tel: "02 201 4600",
    address: "364/1 ถ. ศรีอยุธยา แขวง ถนนพญาไท เขตราชเทวี กรุงเทพมหานคร 10400"
  },
  {
    id: "phyathai2",
    name: "Phyathai 2",
    lat: 13.770568,
    lng: 100.540601,
    tel: "02 617 2444",
    address:
      "943 Phahonyothin Rd, แขวง พญาไท Khet Phaya Thai, Krung Thep Maha Nakhon 10400"
  },
  {
    id: "phyathai3",
    name: "Phyathai 3",
    lat: 13.723242,
    lng: 100.46409,
    tel: "02 467 1111",
    address:
      "111 Phet Kasem Rd, Khwaeng Pak Khlong Phasi Charoen, Khet Phasi Charoen, Krung Thep Maha Nakhon 10160"
  },
  {
    id: "พญาไทศรีราชา",
    name: "พญาไท ศรีราชา",
    lat: 13.75648,
    lng: 100.539204,
    tel: "02 201 4600",
    address: "364/1 ถ. ศรีอยุธยา แขวง ถนนพญาไท เขตราชเทวี กรุงเทพมหานคร 10400"
  },
  {
    id: "พญาไทนวมินทร์",
    name: "พญาไท นวมินทร์",
    lat: 13.75648,
    lng: 100.539204,
    tel: "02 201 4600",
    address: "364/1 ถ. ศรีอยุธยา แขวง ถนนพญาไท เขตราชเทวี กรุงเทพมหานคร 10400"
  }
]

const Branch = ({ match }) => {
  useEffect(() => {
    console.log("hi", match.params.branch)
  })

  return (
    <>
      <BranchBannerCarousel match={match} />
      <div style={{ marginTop: "35vw" }}>
        <BranchCarouselCard />
        <BranchContent match={match} dnBranch={dnBranch} />
        <CeoBlock />
        <MapBlock
          info={
            dnBranch.filter(x => x.id === match.params.branch)[0]
              ? dnBranch.filter(x => x.id === match.params.branch)[0]
              : {
                  id: "empty",
                  name: "",
                  lat: 10,
                  lng: 100,
                  tel: "null",
                  address: "null"
                }
          }
        />
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 40,
            marginBottom: 100
          }}
        >
          <BtnBlue text="Contact us" />
          <Grid container justify="center">
            <CardsCarousel />
            <PackagesCarousel />
            <AnotherCarousel />
            <TestimonialCarousel />
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Branch
