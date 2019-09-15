import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import DoctorSelectMobile from "../components/DoctorSelectMobile"
import queryString from "query-string"

const DoctorSelectMobileContainer = props => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(3)
    }
    console.log(queryString.parse(window.location.search))
  }, [active, _pageContainer])
  return (
    <>
      <DoctorSelectMobile
        queries={queryString.parse(window.location.search)}
        {...props}
      />
    </>
  )
}

export default DoctorSelectMobileContainer
