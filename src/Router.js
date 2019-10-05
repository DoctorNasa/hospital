import React from "react"
import { Switch, Route } from "react-router-dom"
import { isBrowser, isMobile, isTablet, deviceType } from "react-device-detect"
import Empty from "./components/Empty"

import Loadable from "react-loadable"

const Loading = () => <div style={{ height: "1000px" }} />

const ServicesContainer = Loadable({
  loader: () => import("./containers/ServicesContainer"),
  loading: Loading
})

const PackagesContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/PackagesMobileContainer"),
        loading: Loading
      })
    : Loadable({
        loader: () => import("./containers/PackagesContainer"),
        loading: Loading
      })

const AboutContainer = Loadable({
  loader: () => import("./containers/AboutContainer"),
  loading: Loading
})

const FooterContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/FooterMobileContainer"),
        loading: Loading
      })
    : Loadable({
        loader: () => import("./containers/FooterContainer"),
        loading: Loading
      })

const NavbarContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/NavBarMobileContainer"),
        loading: Loading
      })
    : Loadable({
        loader: () => import("./containers/NavbarContainer"),
        loading: Loading
      })

const HomepageContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/HomepageMobileContainer"),
        loading: Loading
      })
    : Loadable({
        loader: () => import("./containers/HomepageContainer"),
        loading: Loading
      })

const BranchContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/BranchMobileContainer"),
        loading: Loading
      })
    : Loadable({
        loader: () => import("./containers/BranchContainer"),
        loading: Loading
      })

const BlogContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/BlogMobileContainer"),
        loading: Loading
      })
    : Loadable({
        loader: () => import("./containers/BlogContainer"),
        loading: Loading
      })

const BlogPostContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/BlogMobilePostContainer"),
        loading: Loading
      })
    : Loadable({
        loader: () => import("./containers/BlogPostContainer"),
        loading: Loading
      })

const DoctorSelectContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/DoctorSelectMobileContainer"),
        loading: Loading
      })
    : Loadable({
        loader: () => import("./containers/DoctorSelectContainer"),
        loading: Loading
      })

const DoctorSelectItemMobileContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () =>
          import("./mobile/containers/DoctorSelectItemMobileContainer"),
        loading: Loading
      })
    : ""

const PackageItemContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/PackageItemMobileContainer"),
        loading: Loading
      })
    : Loadable({
        loader: () => import("./containers/PackagesItemContainer"),
        loading: Loading
      })

const AccommodationsContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/AccommodationsContainer"),
        loading: Loading
      })
    : ""

const AccommodationItemContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/AccommodationItemContainer"),
        loading: Loading
      })
    : ""

const InternationalContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () =>
          import("./mobile/containers/InternationalMobileContainer"),
        loading: Loading
      })
    : ""

const MedicalCenterContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/MedicalCenterContainer"),
        loading: Loading
      })
    : ""

const MedicalCenterItemContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/MedicalCenterItemContainer"),
        loading: Loading
      })
    : ""

const FaqContainer =
  deviceType === "mobile"
    ? Loadable({
        loader: () => import("./mobile/containers/FaqContainer"),
        loading: Loading
      })
    : ""

const Router = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route exact path="/branch/:branch" component={BranchContainer} />
      <Route exact path="/services" component={ServicesContainer} />
      <Route
        exact
        path="/accommodations/:branch"
        component={AccommodationsContainer}
      />
      <Route
        exact
        path="/accommodations/:branch/:id"
        component={AccommodationItemContainer}
      />
      <Route exact path="/packages" component={PackagesContainer} />
      <Route exact path="/packages/item/:id" component={PackageItemContainer} />
      <Route exact path="/doctor-select" component={DoctorSelectContainer} />
      <Route
        exact
        path="/doctor-select/doctor/:id"
        component={DoctorSelectItemMobileContainer}
      />
      <Route exact path="/articles" component={BlogContainer} />
      <Route exact path="/articles/post/:id" component={BlogPostContainer} />
      <Route exact path="/aboutus" component={AboutContainer} />
      <Route exact path="/international" component={InternationalContainer} />
      <Route exact path="/medicalcenter" component={MedicalCenterContainer} />
      <Route
        exact
        path="/medicalcenter/post/:id"
        component={MedicalCenterItemContainer}
      />
      <Route exact path="/faq" component={FaqContainer} />

      <Route component={Empty} />
    </Switch>
    <FooterContainer />
  </div>
)

export default Router
