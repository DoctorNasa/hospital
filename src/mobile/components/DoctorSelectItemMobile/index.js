import React from "react"
import BreadCrumb from "../BreadCrumb"
import BlueTitleIcon from "./BlueTitleIcon"
import Description from "./Description"
import TitlePackageCategory from "../Titles/TitlePackageCategory"
import Table from "./Table"
import Booking from "./Booking"

const styles = {
  container: {
    padding: "75px 15px 0px 15px"
  },
  img: {
    border: "4px solid #30bfc5",
    borderRadius: "50%"
  }
}

const DoctorSelectItemMobile = ({ match }) => {
  return (
    <div style={styles.container}>
      <BreadCrumb
        padding="30px 0px 30px 0px"
        crumbs={[
          { name: "หน้าหลัก", link: "/" },
          { name: "บริการโรงพยาบาล", link: "/doctor-select" },
          { name: "แพทย์" }
        ]}
      />
      <div style={{ textAlign: "center" }}>
        <img style={styles.img} src={"/images/doctor-select.jpg"} />
      </div>
      <BlueTitleIcon text="พญ.วรนุช จุนพึ่งพระเกียรติ์" />
      <Description />
      <TitlePackageCategory
        text="ตารางออกตรวจ"
        img="/images/icons/calendar-icon-secondary.jpg"
        color="#30bfc5"
        fontSize={20}
      />
      <Table />
      <Booking />
    </div>
  )
}

export default DoctorSelectItemMobile
