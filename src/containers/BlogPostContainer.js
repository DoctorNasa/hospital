import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import BlogPost from "../components/Blog/BlogPost"

const BlogPostContainer = props => {
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

export default BlogPostContainer
