import React, { useContext, useEffect, useState, useReducer } from "react"
import { GlobalContext } from "../../"
import DoctorSelectItemMobile from "../components/DoctorSelectItemMobile"

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

const DoctorSelectItemMobileContainer = props => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [reducerBooking, _dispatchBooking] = useReducer(reducer, initialState)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(3)
    }
  }, [active, _pageContainer, reducerBooking])
  return (
    <>
      <DoctorSelectItemMobile
        reducerBooking={reducerBooking}
        _dispatchBooking={_dispatchBooking}
        {...props}
      />
    </>
  )
}

export default DoctorSelectItemMobileContainer
