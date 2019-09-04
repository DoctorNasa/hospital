import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import BlogPost from "../components/BlogMobile/BlogPost"

const BlogMobileContainer = props => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(3)
    }
  }, [active, _pageContainer])

  return <BlogPost {...props} />
}

export default BlogMobileContainer
