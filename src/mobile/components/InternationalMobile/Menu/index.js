import React from "react"
import BreadCrumb from "../../BreadCrumb"
import Tabs from "./Tabs"

const styles = {
  container: {}
}

const Menu = ({ queries }) => {
  return (
    <div>
      <BreadCrumb
        padding="30px 15px 15px 15px"
        crumbs={[
          { name: "หน้าหลัก", link: "/" },
          { name: "บริการโรงพยาบาล", link: "/doctor-select" },
          { name: "แพทย์" }
        ]}
      />
      <Tabs queries={queries} />
    </div>
  )
}

export default Menu
