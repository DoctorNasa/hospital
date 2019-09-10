import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import DoctorSelect from "../components/DoctorSelect"
import queryString from "query-string"

const DoctorSelectContainer = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(1)
    }
  }, [active, _pageContainer])

  return <DoctorSelect queries={queryString.parse(window.location.search)} />
}

export default DoctorSelectContainer
