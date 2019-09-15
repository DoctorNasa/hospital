import React, { useEffect } from "react"
import BannerCarousel from "./BannerCarousel"
import ZCarouselCardMobile from "../ZCarouselCardMobile"
import BranchContentMobile from "./BranchContentMobile"
import dbBranches from "../../../dbBranches.json"
import CeoBlock from "./CeoBlock"
import "./style.css"
import MapBlock from "./MapBlock"
import BtnBlue from "../BtnBlue"
import ZCardsCategoriesCarousel from "../ZCardsCategoriesCarousel"
import ZPackagesCarousel from "../ZPackagesCarousel"
import ZAnotherCarousel from "../ZAnotherCarousel"
import TestimonialCarousel from "../TestimonialCarousel"

const BranchMobile = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    console.log("hi", match.params.branch)
  })

  return (
    <div>
      <BannerCarousel />
      <ZCarouselCardMobile />
      <BranchContentMobile match={match} dbBranches={dbBranches} />
      <CeoBlock />
      <MapBlock
        info={
          dbBranches.filter(x => x.id === match.params.branch)[0]
            ? dbBranches.filter(x => x.id === match.params.branch)[0]
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
      <BtnBlue
        text="Contact us"
        width="100%"
        textAlign="center"
        marginTop={30}
      />
      <ZCardsCategoriesCarousel />
      <BtnBlue text="ดูทั้งหมด" width="100%" textAlign="center" />
      <ZPackagesCarousel />
      <BtnBlue text="ดูทั้งหมด" textAlign="center" paddingBottom={15} />
      <ZAnotherCarousel />
      <BtnBlue text="ดูทั้งหมด" textAlign="center" paddingBottom={15} />
      <TestimonialCarousel />
    </div>
  )
}

export default BranchMobile
