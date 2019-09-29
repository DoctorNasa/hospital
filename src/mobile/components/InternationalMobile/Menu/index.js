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
          { name: "International Patient", link: "/" },
          { name: "Marketing" }
        ]}
      />
      <Tabs queries={queries} />
    </div>
  )
}

export default Menu
