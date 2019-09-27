import React, { useReducer } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import "./index.css"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"

const initState = {
  pageContainer: 0,
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
    case "pageContainer":
      return { ...state, pageContainer: payload }
    case "gender":
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

const GlobalReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState)

  const _actionRedux = (type, payload) =>
    dispatch({
      type,
      payload
    })

  const contextValues = {
    _actionRedux,
    stateRedux: state
  }

  return (
    <GlobalContext.Provider value={contextValues}>
      <Router />
    </GlobalContext.Provider>
  )
}
// const { _actionRedux, stateRedux } = useContext(GlobalContext)
export const GlobalContext = React.createContext({})

const theme = createMuiTheme({
  palette: {
    primary: { main: "#00826a" },
    secondary: { main: "#30bfc5" }
  }
})

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalReducer />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
