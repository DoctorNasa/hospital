import React, { useContext, useEffect, useState, useReducer } from "react"
import { GlobalContext } from "../../"
import DoctorSelectMobile from "../components/DoctorSelectMobile"
import queryString from "query-string"

const initialState = {
  form: {
    gender: "male",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    birthday: "",
    tel: "",
    idCard: "",
    email: "",
    patientIdOptional: "",
    detailsOptional: ""
  }
}

const reducer = (state, action) => {
  const { payload } = action

  switch (action.type) {
    case "gender":
      console.log(state)
      return { ...state, form: { ...state.form, gender: payload } }
    case "firstName":
      return { ...state, form: { ...state.form, firstName: payload } }
    case "lastName":
      return { ...state, form: { ...state.form, lastName: payload } }
    case "country":
      return { ...state, form: { ...state.form, country: payload } }
    case "city":
      return { ...state, form: { ...state.form, city: payload } }
    case "birthday":
      return { ...state, form: { ...state.form, birthday: payload } }
    case "tel":
      return { ...state, form: { ...state.form, tel: payload } }
    case "idCard":
      return { ...state, form: { ...state.form, idCard: payload } }
    case "email":
      return { ...state, form: { ...state.form, email: payload } }
    case "patientIdOptional":
      return { ...state, form: { ...state.form, patientIdOptional: payload } }
    case "detailsOptional":
      return { ...state, form: { ...state.form, detailsOptional: payload } }
    default:
      throw new Error()
  }
}

const DoctorSelectMobileContainer = props => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [reducerBooking, _dispatchBooking] = useReducer(reducer, initialState)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
    console.log("reducer: ", reducerBooking)
    console.log(queryString.parse(window.location.search))
  }, [active, _actionRedux, reducerBooking])
  return (
    <>
      <DoctorSelectMobile
        reducerBooking={reducerBooking}
        _dispatchBooking={_dispatchBooking}
        queries={queryString.parse(window.location.search)}
        {...props}
      />
    </>
  )
}

export default DoctorSelectMobileContainer
