import React, { useEffect, useState } from "react"

import ButtonDrag from "./ButtonDrag"
import "./styles.css"

const styles = {
  close: {
    marginTop: -200
  },
  open: {
    marginTop: 100
  }
}

const BlogMobile = ({ queries }) => {
  const [isOpen, setIsOpen] = useState(true)

  const _setIsOpen = y => setIsOpen(y)

  useEffect(() => {
    console.log("isOpen", isOpen)
  }, [isOpen])
  return (
    <div>
      <ButtonDrag queries={queries} _setIsOpen={_setIsOpen} isOpen={isOpen} />
      <div style={isOpen ? styles.open : styles.close}>hehhe</div>
    </div>
  )
}

export default BlogMobile
