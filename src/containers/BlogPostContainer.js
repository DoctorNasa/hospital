import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import BlogPost from "../components/Blog/BlogPost"

const BlogPostContainer = props => {
  const { _actionRedux, stateRedux } = useContext(GlobalContext)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      setActive(false)
      _actionRedux("pageContainer", 3)
    }
  }, [active, _actionRedux])

  return <BlogPost {...props} />
}

export default BlogPostContainer
