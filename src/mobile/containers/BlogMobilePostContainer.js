import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../"
import BlogPost from "../components/BlogMobile/BlogPost"

const BlogMobileContainer = props => {
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

export default BlogMobileContainer
