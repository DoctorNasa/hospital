import React, { useContext, useEffect, useState, useReducer } from "react"
import { GlobalContext } from "../"
import DoctorSelect from "../components/DoctorSelect"
import queryString from "query-string"

const initialState = {
  booking: {
    hospital: "",
    package: "",
    date1: "",
    date2: "",
    customer: {
      gender: "",
      name: "",
      firstname: "",
      email: ""
    }
  }
}

const reducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case "fill_booking":
      return { ...state, ...{ booking: payload } }
    case "fill_customer":
      return { ...state, ...{ booking: payload } }
    default:
      throw new Error()
  }
}

const DoctorSelectContainer = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [active, setActive] = useState(true)

  const _fillBooking = payload =>
    dispatch({
      type: "fill_booking",
      payload
    })

  const _fillCustomer = payload =>
    dispatch({
      type: "fill_customer",
      payload
    })

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(1)
    }
  }, [active, _pageContainer])

  return (
    <DoctorSelect
      queries={queryString.parse(window.location.search)}
      _fillBooking={_fillBooking}
      _fillCustomer={_fillCustomer}
      state={state}
    />
  )
}

export default DoctorSelectContainer
