import React from "react"

const styles = {
  container: {
    paddingTop: 100
  }
}

const Accomodations = ({ match }) => {
  return <div style={styles.container}>fjdf {match.params.id}</div>
}

export default Accomodations
