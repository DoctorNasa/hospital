import React, { useState } from "react"
import BreadCrumb from "../BreadCrumb"
import BlueTitleIcon from "./BlueTitleIcon"
import Description from "./Description"
import TitlePackageCategory from "../Titles/TitlePackageCategory"
import Table from "./Table"
import Booking from "./Booking"
import Success from "../DoctorSelectMobile/Success"

const styles = {
  container: {
    padding: "75px 15px 0px 15px"
  },
  img: {
    border: "4px solid #30bfc5",
    borderRadius: "50%"
  }
}

const DoctorSelectItemMobile = ({ match, stateRedux, _actionRedux }) => {
  const [success, setSuccess] = useState(false)

  const _setSuccess = bool => {
    setSuccess(bool)
    window.scrollTo(0, 0)
  }

  if (success) return <Success />

  return (
    <div style={success ? styles.containerSuccess : styles.container}>
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
      <Booking
        stateRedux={stateRedux}
        _actionRedux={_actionRedux}
        _setSuccess={_setSuccess}
      />
    </div>
  )
}

export default DoctorSelectItemMobile
