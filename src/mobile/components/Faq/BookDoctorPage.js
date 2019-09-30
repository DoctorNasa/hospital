import React, { useState } from "react"

const styles = {
  container: {
    background: "white"
  }
}

const BookDoctorPage = () => {
  const [success, setSuccess] = useState(false)

  const _success = () => setSuccess(true)
  return <div style={styles.container}>Book page</div>
}

export default BookDoctorPage
