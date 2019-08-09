import React from "react"
import { Switch, Route } from "react-router-dom"
import Empty from "./components/Empty"
import NavbarContainer from "./containers/NavbarContainer"
import Loadable from "react-loadable"

const Loading = () => <div style={{ height: "1000px" }} />

const HomepageContainer = Loadable({
  loader: () => import("./containers/HomepageContainer"),
  loading: Loading
})

const Router = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route component={Empty} />
    </Switch>
    {/* <Footer /> */}
  </div>
)

export default Router
