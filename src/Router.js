import React from "react"
import { Switch, Route } from "react-router-dom"
import Empty from "./components/Empty"
import NavbarContainer from "./containers/NavbarContainer"
import FooterContainer from "./containers/FooterContainer"
import Loadable from "react-loadable"

const Loading = () => <div style={{ height: "1000px" }} />

const HomepageContainer = Loadable({
  loader: () => import("./containers/HomepageContainer"),
  loading: Loading
})

const ServicesContainer = Loadable({
  loader: () => import("./containers/ServicesContainer"),
  loading: Loading
})

const PackagesContainer = Loadable({
  loader: () => import("./containers/PackagesContainer"),
  loading: Loading
})

const ArticlesContainer = Loadable({
  loader: () => import("./containers/ArticlesContainer"),
  loading: Loading
})

const AboutContainer = Loadable({
  loader: () => import("./containers/AboutContainer"),
  loading: Loading
})

const Router = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route exact path="/services" component={ServicesContainer} />
      <Route exact path="/packages" component={PackagesContainer} />
      <Route exact path="/articles" component={ArticlesContainer} />
      <Route exact path="/aboutus" component={AboutContainer} />
      <Route component={Empty} />
    </Switch>
    <FooterContainer />
  </div>
)

export default Router
