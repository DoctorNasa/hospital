import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import BlogMobile from "../components/BlogMobile"
import queryString from "query-string"

const BlogMobileContainer = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(3)
    }
    const queryString = require("query-string")
  }, [active, _pageContainer])

  return <BlogMobile />
}

export default BlogMobileContainer
