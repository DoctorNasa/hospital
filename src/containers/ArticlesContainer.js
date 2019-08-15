import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../"
import Articles from "../components/Articles"

const ArticlesContainer = () => {
  const { _pageContainer, pageContainer } = useContext(GlobalContext)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
      setActive(false)
      _pageContainer(4)
    }
  }, [active, _pageContainer])

  return <Articles />
}

export default ArticlesContainer
