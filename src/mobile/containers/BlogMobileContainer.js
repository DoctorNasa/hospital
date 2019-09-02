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
    console.log(queryString.parse(window.location.search))
  }, [active, _pageContainer])

  return <BlogMobile queries={queryString.parse(window.location.search)} />
}

export default BlogMobileContainer
