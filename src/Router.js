import React from "react"
import { Switch, Route } from "react-router-dom"
import { isBrowser, isMobile, isTablet } from "react-device-detect"
import Empty from "./components/Empty"

import Loadable from "react-loadable"

const Loading = () => <div style={{ height: "1000px" }} />

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

const FooterContainer = isMobile
  ? Loadable({
      loader: () => import("./mobile/containers/FooterMobileContainer"),
      loading: Loading
    })
  : Loadable({
      loader: () => import("./containers/FooterContainer"),
      loading: Loading
    })

const NavbarContainer = isMobile
  ? Loadable({
      loader: () => import("./mobile/containers/NavBarMobileContainer"),
      loading: Loading
    })
  : Loadable({
      loader: () => import("./containers/NavbarContainer"),
      loading: Loading
    })

const HomepageContainer = isMobile
  ? Loadable({
      loader: () => import("./mobile/containers/HomepageMobileContainer"),
      loading: Loading
    })
  : Loadable({
      loader: () => import("./containers/HomepageContainer"),
      loading: Loading
    })

const BranchContainer = Loadable({
  loader: () => import("./containers/BranchContainer"),
  loading: Loading
})

const Router = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route exact path="/branch/:branch" component={BranchContainer} />
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
