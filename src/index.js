import React, { useReducer } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import "./index.css"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"

const initState = {
  pageContainer: 0
}

const reducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case "pageContainer":
      return { ...state, pageContainer: payload }

    default:
      throw new Error()
  }
}

const GlobalReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState)

  const _pageContainer = payload =>
    dispatch({
      type: "pageContainer",
      payload
    })

  const contextValues = {
    _pageContainer,
    pageContainer: state.pageContainer
  }

  return (
    <GlobalContext.Provider value={contextValues}>
      <Router />
    </GlobalContext.Provider>
  )
}
// const { _pageContainer, pageContainer } = useContext(GlobalContext)
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
